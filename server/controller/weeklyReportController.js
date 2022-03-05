const Evaporator = require('../model/Evaporator')
const Electrolysis = require('../model/Electrolysis')
const HCl = require('../model/HCl')
const NaClO = require('../model/NaClO')
const ControlRoom = require('../model/ControlRoom')
const SpecificUsages = require('../model/SpecificUsages')
const ShiftReport = require('../model/ShiftReport')

// Utility function for converting string date
function convertToJSDate(dateString) {
    const dateSplit = dateString.split('-')
    var year = parseInt(dateSplit[2])
    var month = parseInt(dateSplit[0])
    var day = parseInt(dateSplit[1])
    return new Date(year, month-1, day+1)
}

// @method:     GET
// @access:     PUBLIC
// @desc:       This will get the shift reports with the specified date
// @route:      /api/v1/weekly_report/get/:date
const getWeeklyReport = async (req, res) => {
    const startDate = convertToJSDate(req.params.startDate)
    const endDate = convertToJSDate(req.params.endDate)

    if(endDate.getTime() <= startDate.getTime()) {
        return res.json({
            success: false,
            message: 'Date range not valid'
            }
        )
    }

    try {
        const shiftReports = await ShiftReport.find({date: {$gte: startDate, $lte: endDate}})
        if(shiftReports.length === 0) {
            return res.json({
                success: false,
                message: 'No shift reports submitted in this date range'
            })
        } else {
            console.log(shiftReports)
        }

        // Query sums of data from Evap 
        const evap_sums = await Evaporator.aggregate([
            {$match: {date: {$gte: startDate, $lte: endDate}}},
            {$group: {
                _id: null,
                naoh_sum: {$sum: '$naoh_prod'},
                hours_sum: {$sum: '$hours'},
                theoretical_sum: {$sum: '$theoretical'}
            }}
        ])

        // Query sums of data from Electrolysis
        const electro_sums = await Electrolysis.aggregate([
            {$match: {date: {$gte: startDate, $lte: endDate}}},
            {$group: {
                _id: null,
                cell_liq_prod_sum: {$sum: '$cell_liq_prod'},
            hours_sum: {$sum: '$hours'}
            }}
        ])

        // Calculate the Actual Caus{tic Soda 32%
        const ac_caustic_32 = electro_sums[0].cell_liq_prod_sum - evap_sums[0].naoh_sum

        // Query sums of data from HCl
        const hcl_sums = await HCl.aggregate([
            {$match: {date: {$gte: startDate, $lte: endDate}}},
            {$group: {
                _id: null,
                hcl_sum: {$sum: '$hcl'},
                hcl_hours_sum: {$sum: '$hcl_hours'},
                lcp_hours_sum: {$sum: '$lcp_hours'},
            }}
        ])

        // Query sums of data from NaCLO
        const naclos_sums = await NaClO.aggregate([
            {$match: {date: {$gte: startDate, $lte: endDate}}},
            {$group: {
                _id: null,
                naclo_sum: {$sum: '$production'},
                hours_sum: {$sum: '$hours'}
            }}
        ])

        // Query sums of data from Control Room
        const control_room_sums = await ControlRoom.aggregate([
            {$match: {date: {$gte: startDate, $lte: endDate}}},
            {$group: {
                _id: null,
                avg_load: {$sum: {$multiply: ['$hours', '$avg_load']}},
                avg_op_cells: {$sum: {$multiply: ['$hours', '$cells']}},
                hours_sum: {$sum: '$hours'}
            }}
        ])

        // Getting the load values 
        const average_current_load =  control_room_sums[0].avg_load / control_room_sums[0].hours_sum
        const average_op_cells =  control_room_sums[0].avg_op_cells / control_room_sums[0].hours_sum

        // Getting actual consumption values and products to distribution
        const usagesSum = await SpecificUsages.aggregate([
            {$match: {date: {$gte: startDate, $lte: endDate}}},
            {$group: {
                _id: null,
                naoh_32_sum: {$sum: '$naoh_32'},
                naoh_50_sum: {$sum: '$naoh_50'},
                hcl_sum: {$sum: '$hcl'},
                naocl_sum: {$sum: '$naocl'},
                naocl_waste_sum: {$sum: '$naocl_waste'},
                ac_salt: {$sum: '$ac_salt'},
                ac_soda_ash: {$sum: '$ac_soda_ash'},
                ac_naoh: {$sum: '$ac_naoh'},
                ac_hcl: {$sum: '$ac_hcl'},
                ac_bacl2: {$sum: '$ac_bacl2'},
                ac_flocullant: {$sum: '$ac_flocullant'},
                ac_na2so3: {$sum: '$ac_na2so3'},
                ac_alpha_cellulose: {$sum: '$ac_alpha_cellulose'},
                ac_power: {$sum: '$ac_power'},
                ac_steam_evap: {$sum: '$ac_steam_evap'},
                ac_steam_brine: {$sum: '$ac_steam_brine'}
            }}
        ])

        // Calculating the efficiencies
        // Electrolysis Eff
        const theoretical_naoh = (1.4925 * control_room_sums[0].hours_sum * average_current_load * average_op_cells *  0.94) / 1000
        const electro_eff = ((ac_caustic_32 + evap_sums[0].naoh_sum) / theoretical_naoh) * 100
        
        // HCl Eff
        const theoretical_hcl = (1.36 * hcl_sums[0].hcl_hours_sum * average_current_load * average_op_cells *  0.94) / 1000
        const hcl_eff = (hcl_sums[0].hcl_sum / theoretical_hcl) * 100

        // Evap Eff
        const evap_eff = (evap_sums[0].naoh_sum / evap_sums[0].theoretical_sum) * 100
        // ------------------------------

        res.status(200).json({
            success: true,
            // Production
            data: {
                production: {
                    ac_caustic_50: evap_sums[0].naoh_sum,                 
                    ac_caustic_32: parseFloat(ac_caustic_32.toFixed(2)),
                    ac_hcl: parseFloat(hcl_sums[0].hcl_sum.toFixed(2)),
                    ac_naclo: naclos_sums[0].naclo_sum,
                },
                
                // Load & Number of Cells
                load: {
                    average_current_load: parseFloat(average_current_load.toFixed(2)),
                    average_op_cells: parseFloat(average_op_cells.toFixed(2)),
                },
                // Operating Time
                operating_time: {
                    electro_hours: control_room_sums[0].hours_sum,
                    evap_hours: evap_sums[0].hours_sum,
                    hcl_hours: hcl_sums[0].hcl_hours_sum,
                    lcp_hours: hcl_sums[0].lcp_hours_sum,
                    naclo_hours: naclos_sums[0].hours_sum,
                },
                
                // Efficiency
                efficiency: {
                    electro_eff: parseFloat(electro_eff.toFixed(2)),
                    hcl_eff: parseFloat(hcl_eff.toFixed(2)),
                    evap_eff: parseFloat(evap_eff.toFixed(2)),
                },
                
                // Usages
                usages: {
                    ac_salt:parseFloat((usagesSum[0].ac_salt / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_soda_ash: parseFloat((usagesSum[0].ac_soda_ash / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_naoh: parseFloat((usagesSum[0].ac_naoh / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_hcl: parseFloat((usagesSum[0].ac_hcl / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_bacl2: parseFloat((usagesSum[0].ac_bacl2 / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_flocullant: parseFloat((usagesSum[0].ac_flocullant / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_na2so3: parseFloat((usagesSum[0].ac_na2so3 / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_alpha_cellulose: parseFloat((usagesSum[0].ac_alpha_cellulose / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_power: parseFloat((usagesSum[0].ac_power / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_steam_evap: parseFloat((usagesSum[0].ac_steam_evap / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                    ac_steam_brine: parseFloat((usagesSum[0].ac_steam_brine / electro_sums[0].cell_liq_prod_sum).toFixed(2)),
                },
    
                // Products to Dist
                products_dist: usagesSum[0]
            }
        })
    } catch(err) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong ☹️☹️☹️',
            err: err.message
        })
    }
   
}

module.exports = {getWeeklyReport}