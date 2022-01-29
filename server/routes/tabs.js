const router = require('express').Router()
const {createControlRoom} = require('../controller/controlRoom')

router.get('/control_room', createControlRoom)

module.exports = router