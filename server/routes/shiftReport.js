const router = require('express').Router()
const axios = require('axios')
const {createControlRoom} = require('../utils/controlRoom_fxn')
const {createHCl} = require('../utils/hcl_fxn')

router.post('/', async (req,res) => {
    const controlRoomResponse = await createControlRoom(req.body.controlRoomSection)
    const hclResponse = await createHCl(req.body.hclSection)

    
    res.json({controlRoomResponse, hclResponse})
})

module.exports = router