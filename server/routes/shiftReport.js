const router = require('express').Router()
const mongoose = require('mongoose')
const { validateData, createReport, getMTD } = require('../controller/shiftReportController')
const checkConnection = require('../middleware/connectionCheck')

router.post('/validate', validateData)
router.post('/create', checkConnection, createReport)
router.get('/getMTD/:date/:shift', checkConnection, getMTD)

module.exports = router