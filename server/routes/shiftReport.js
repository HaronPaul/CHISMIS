const router = require('express').Router()
const { validateData, createReport, getMTD, getShiftReports, getSingleReport, updateReport } = require('../controller/shiftReportController')
const checkConnection = require('../middleware/connectionCheck')

router.post('/validate', validateData)
router.post('/create', checkConnection, createReport)
router.get('/getMTD/:date/:shift', checkConnection, getMTD)
router.get('/get_reports/:date', checkConnection, getShiftReports)
router.get('/get_report/:id', checkConnection, getSingleReport)
router.put('/update/:id', checkConnection, updateReport)

module.exports = router