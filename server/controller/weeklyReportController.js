
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
const getWeeklyReport = (req, res) => {
    const startDate = convertToJSDate(req.params.startDate)
    const endDate = convertToJSDate(req.params.endDate)

    
}

module.exports = {getWeeklyReport}