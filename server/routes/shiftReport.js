const router = require('express').Router()
const axios = require('axios')
const {createControlRoom} = require('../utils/controlRoom_fxn')
const {createHCl} = require('../utils/hcl_fxn')
const {createEvap} = require('../utils/evap_fxns')
const {createPrimaryBrine} = require('../utils/primaryBrine_fxn')
const {createElectrolysis} = require('../utils/electrolysis_fxn')

router.post('/', async (req,res) => {
    const controlRoomResponse = await createControlRoom(req.body.controlRoomSection)
    const hclResponse = await createHCl(req.body.hclSection)
    const evapResponse = await createEvap(req.body.evapSection)
    const prBrineResponse = await createPrimaryBrine(req.body.prBrineSection)
    const electrolysisResponse = await createElectrolysis(req.body.electroSection)

    res.json({controlRoomResponse, hclResponse, evapResponse, prBrineResponse, electrolysisResponse})
})

module.exports = router