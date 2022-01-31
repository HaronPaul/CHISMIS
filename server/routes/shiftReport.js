const router = require('express').Router()
const axios = require('axios')
const {createControlRoom} = require('../controller/controlRoom')


router.post('/', async (req,res) => {
    const controlRoomResponse = await createControlRoom(req.body.controlRoomSection)
    res.json(controlRoomResponse)
    // res.json(controlRoomResponse.data)
})


module.exports = router