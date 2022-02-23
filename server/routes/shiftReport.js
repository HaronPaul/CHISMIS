const router = require('express').Router()
const mongoose = require('mongoose')
const { validateData, createReport } = require('../controller/shiftReportController')

router.post('/validate', validateData)
router.post('/create', createReport)

module.exports = router