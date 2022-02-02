const router = require('express').Router()
const axios = require('axios')
const {createControlRoom} = require('../utils/controlRoom_fxn')
const {createHCl} = require('../utils/hcl_fxn')
const {createEvap} = require('../utils/evap_fxns')
const {createPrimaryBrine} = require('../utils/primaryBrine_fxn')
const {createElectrolysis} = require('../utils/electrolysis_fxn')
const {createNaClO} = require('../utils/naClo_fxn')
const {createQcBrine} = require('../utils/qcBrine_fxn')

router.post('/', async (req,res) => {
    const controlRoomResponse = await createControlRoom(req.body.controlRoomSection)
    const hclResponse = await createHCl(req.body.hclSection)
    const evapResponse = await createEvap(req.body.evapSection)
    const prBrineResponse = await createPrimaryBrine(req.body.prBrineSection)
    const electrolysisResponse = await createElectrolysis(req.body.electroSection)
    const naClOResponse = await createNaClO(req.body.nacloSection)
    const qcBrineResponse = await createQcBrine(req.body.qcBrineSection)
    

    res.json({controlRoomResponse, hclResponse, evapResponse, prBrineResponse, electrolysisResponse, naClOResponse, qcBrineResponse})
})

module.exports = router