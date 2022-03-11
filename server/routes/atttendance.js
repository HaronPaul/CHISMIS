const router = require('express').Router()
const {getOperators} = require('../controller/attendanceController')
const checkConnection = require('../middleware/connectionCheck')

router.get('/:year/:month/:section', checkConnection, getOperators)

module.exports = router