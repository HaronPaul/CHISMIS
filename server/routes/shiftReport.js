const router = require('express').Router()
const axios = require('axios')
const {createControlRoom} = require('../utils/controlRoom_fxn')
const {createHCl} = require('../utils/hcl_fxn')
const {createEvap} = require('../utils/evap_fxns')

router.post('/', async (req,res) => {
    const controlRoomResponse = await createControlRoom(req.body.controlRoomSection)
    const hclResponse = await createHCl(req.body.hclSection)
    const evapResponse = await createEvap(req.body.evapSection)

    res.json({controlRoomResponse, hclResponse, evapResponse})
})

module.exports = router