const Evaporator = require('../model/Evaporator')
const Electrolysis = require('../model/Electrolysis')
const HCl = require('../model/HCl')
const NaClO = require('../model/NaClO')
const ControlRoom = require('../model/ControlRoom')
const SpecificUsages = require('../model/SpecificUsages')

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

    // Query sums of data from Evap 
    const ac_caustic_50 = await Evaporator.aggregate([
        {$match: {date: {$gte: startDate, $lte: endDate}}},
        {$group: {
            _id: null,
            naoh_sum: {$sum: '$naoh_prod'}
        }}
    ])

    // Gets the Actual Caustic Soda 50%
    const electro_sums = await Electrolysis.aggregate([
        {$match: {date: {$gte: startDate, $lte: endDate}}},
        {$group: {
            _id: null,
            cell_liq_prod_sum: {$sum: '$cell_liq_prod'}
        }}
    ])

    // Calculate the Actual Caustic Soda 32%
    const ac_caustic_32 = electro_sums[0].cell_liq_prod_sum - ac_caustic_50[0].naoh_sum

    // Calculate the Actual HCl
    const ac_hcl = await HCl.aggregate([
        {$match: {date: {$gte: startDate, $lte: endDate}}},
        {$group: {
            _id: null,
            hcl_sum: {$sum: '$hcl'}
        }}
    ])

    // Calculate the Actual Sodium Hypo
    const ac_naclo = await NaClO.aggregate([
        {$match: {date: {$gte: startDate, $lte: endDate}}},
        {$group: {
            _id: null,
            naclo_sum: {$sum: '$production'}
        }}
    ])

    // Calculate Average Current Load
    const load = await ControlRoom.aggregate([
        {$match: {date: {$gte: startDate, $lte: endDate}}},
        {$group: {
            _id: null,
            avg_load: {$sum: {$multiply: ['$hours', '$avg_load']}},
            avg_op_cells: {$sum: {$multiply: ['$hours', '$cells']}},
            total_hours: {$sum: '$hours'}
        }}
    ])

    // Getting the load values 
    const average_current_load =  load[0].avg_load / load[0].total_hours
    const average_op_cells =  load[0].avg_op_cells / load[0].total_hours

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
        }}
    ])

    res.json({
        ac_caustic_50: ac_caustic_50[0].naoh_sum,                 
        ac_caustic_32: parseFloat(ac_caustic_32.toFixed(2)), 
        ac_hcl: ac_hcl[0].hcl_sum,
        ac_naclo: ac_naclo[0].naclo_sum,
        average_current_load,
        average_op_cells,
        products_dist: usagesSum[0]
    })
}

module.exports = {getWeeklyReport}