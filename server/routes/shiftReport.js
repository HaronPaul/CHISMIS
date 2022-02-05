const router = require('express').Router()
const mongoose = require('mongoose')
const {
    controlRoomSchema, 
    hclSchema, 
    evapSchema, 
    prBrineSchema, 
    electroSchema,
    nacloSchema,
    qcBrineschema,
    usagesSchema,
    spEvalSchema,
    shiftReportSchema
} = require('../utils/schema_validation')
const validate = require('../utils/validator')



router.post('/', async (req,res) => {
    let errors = []

    let {currentSupervisor, manager, incomingSupervisor, date, shift, signCount, isComplete} = req.body
    const shiftReportResponse = await validate({date, shift}, shiftReportSchema)
    if(!shiftReportResponse.success) errors.push(...shiftReportResponse.error)

    const controlRoomResponse = await validate(req.body.controlRoomSection, controlRoomSchema)
    if(!controlRoomResponse.success) errors.push(...controlRoomResponse.error)

    const hclResponse = await validate(req.body.hclSection, hclSchema)
    if(!hclResponse.success) errors.push(...hclResponse.error)

    const evapResponse = await validate(req.body.evapSection, evapSchema)
    if(!evapResponse.success) errors.push(...evapResponse.error)

    const prBrineResponse = await validate(req.body.prBrineSection, prBrineSchema)
    if(!prBrineResponse.success) errors.push(...prBrineResponse.error)

    const electrolysisResponse = await validate(req.body.electroSection, electroSchema)
    if(!electrolysisResponse.success) errors.push(...electrolysisResponse.error)

    const naClOResponse = await validate(req.body.nacloSection, nacloSchema)
    if(!naClOResponse.success) errors.push(...naClOResponse.error)
    
    const qcBrineResponse = await validate(req.body.qcBrineSection, qcBrineschema)
    if(!qcBrineResponse.success) errors.push(...qcBrineResponse.error)

    const specificUsagesResponse = await validate(req.body.usagesSection, usagesSchema)
    if(!specificUsagesResponse.success) errors.push(...specificUsagesResponse.error)

    const spEvalResponse = await validate(req.body.evalSection, spEvalSchema)
    if(!spEvalResponse.success) errors.push(...spEvalResponse.error)

    let response = {
        success: errors.length == 0? true:false,
        numErrors: errors.length,
        errors
    }

    if(response.success) {
        // Do mongoose insert operations here
        console.log('No errors on validation')
        return res.json(response)
    } else {
        // Send the response object with errors
        return res.json(response)
    }
})

module.exports = router