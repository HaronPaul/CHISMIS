const Evaporator = require('../model/Evaporator')
const Electrolysis = require('../model/Electrolysis')
const HCl = require('../model/HCl')

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

    // Gets the sum of the cell liq prod from startDate to endDate
    const electro_sums = await Electrolysis.aggregate([
        {$match: {date: {$gte: startDate, $lte: endDate}}},
        {$group: {
            _id: null,
            cell_liq_prod_sum: {$sum: '$cell_liq_prod'}
        }}
    ])

    // Calculate the ac_caustic_32
    const ac_caustic_32 = electro_sums[0].cell_liq_prod_sum - ac_caustic_50[0].naoh_sum

    // Gets the sum of the hcl prod from startDate to endDate
    const ac_hcl = await HCl.aggregate([
        {$match: {date: {$gte: startDate, $lte: endDate}}},
        {$group: {
            _id: null,
            hcl_sum: {$sum: '$hcl'}
        }}
    ])

    res.json({
        ac_caustic_50: ac_caustic_50[0].naoh_sum,
        ac_caustic_32: ac_caustic_32.toFixed(2), 
        ac_hcl: ac_hcl[0].hcl_sum
    })
}

module.exports = {getWeeklyReport}