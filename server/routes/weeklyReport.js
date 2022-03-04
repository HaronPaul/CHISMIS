const router = require('express').Router()
const checkConnection = require('../middleware/connectionCheck')

// Import functions
const {getWeeklyReport} = require('../controller/weeklyReportController')

router.get('/get/:startDate/:endDate', checkConnection, getWeeklyReport)

module.exports = router