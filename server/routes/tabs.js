const router = require('express').Router()
const {createControlRoom, getControlRoom} = require('../controller/controlRoom')

router.post('/control_room', createControlRoom)
router.get('/control_room', getControlRoom)

module.exports = router