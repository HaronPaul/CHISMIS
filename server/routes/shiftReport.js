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
    let errors = {
        shiftReportErrors: [],
        controlRoomErrors: [],
        hclErrors: [],
        evapErrors: [],
        prBrineErrors: [],
        electroErrors: [],
        nacloErrors: [],
        qcBrineErrors: [],
        usagesErrors: [],
        evalErrors: [],
    }

    let {currentSupervisor, manager, incomingSupervisor, date, shift, signCount, isComplete} = req.body
    const shiftReportResponse = await validate({date, shift}, shiftReportSchema)
    if(!shiftReportResponse.success) errors.shiftReportErrors.push(...shiftReportResponse.error)

    const controlRoomResponse = await validate(req.body.controlRoomSection, controlRoomSchema)
    if(!controlRoomResponse.success) errors.controlRoomErrors.push(...controlRoomResponse.error)

    const hclResponse = await validate(req.body.hclSection, hclSchema)
    if(!hclResponse.success) errors.hclErrors.push(...hclResponse.error)

    const evapResponse = await validate(req.body.evapSection, evapSchema)
    if(!evapResponse.success) errors.evapErrors.push(...evapResponse.error)

    const prBrineResponse = await validate(req.body.prBrineSection, prBrineSchema)
    if(!prBrineResponse.success) errors.prBrineErrors.push(...prBrineResponse.error)

    const electrolysisResponse = await validate(req.body.electroSection, electroSchema)
    if(!electrolysisResponse.success) errors.electroErrors.push(...electrolysisResponse.error)

    const naClOResponse = await validate(req.body.nacloSection, nacloSchema)
    if(!naClOResponse.success) errors.nacloErrors.push(...naClOResponse.error)
    
    const qcBrineResponse = await validate(req.body.qcBrineSection, qcBrineschema)
    if(!qcBrineResponse.success) errors.qcBrineErrors.push(...qcBrineResponse.error)

    const specificUsagesResponse = await validate(req.body.usagesSection, usagesSchema)
    if(!specificUsagesResponse.success) errors.usagesErrors.push(...specificUsagesResponse.error)

    const spEvalResponse = await validate(req.body.evalSection, spEvalSchema)
    if(!spEvalResponse.success) errors.evalErrors.push(...spEvalResponse.error)

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