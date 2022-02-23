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

// Import models
const ShiftReport = require('../model/ShiftReport')
const ControlRoom = require('../model/ControlRoom')
const HCl = require('../model/HCl')
const Evaporator = require('../model/Evaporator')
const PrimaryBrine = require('../model/PrimaryBrine')
const Electrolysis = require('../model/Electrolysis')

// @method:     POST
// @access:     Private
// @desc:       This will validate values from the Shift Report
// @route:      /api/v1/shift_report/validate
const validateData = async (req,res) => {
    let errors = {
        numErrors: 0,
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
    if(!shiftReportResponse.success) errors.shiftReportErrors.push(...shiftReportResponse.error); errors.numErrors += errors.shiftReportErrors.length

    const controlRoomResponse = await validate(req.body.controlRoomSection, controlRoomSchema)
    if(!controlRoomResponse.success) errors.controlRoomErrors.push(...controlRoomResponse.error); errors.numErrors += errors.controlRoomErrors.length

    const hclResponse = await validate(req.body.hclSection, hclSchema)
    if(!hclResponse.success) errors.hclErrors.push(...hclResponse.error); errors.numErrors += errors.hclErrors.length 

    const evapResponse = await validate(req.body.evapSection, evapSchema)
    if(!evapResponse.success) errors.evapErrors.push(...evapResponse.error); errors.numErrors += errors.evapErrors.length

    const prBrineResponse = await validate(req.body.prBrineSection, prBrineSchema)
    if(!prBrineResponse.success) errors.prBrineErrors.push(...prBrineResponse.error); errors.numErrors += errors.prBrineErrors.length

    const electrolysisResponse = await validate(req.body.electroSection, electroSchema)
    if(!electrolysisResponse.success) errors.electroErrors.push(...electrolysisResponse.error); errors.numErrors += errors.electroErrors.length

    const naClOResponse = await validate(req.body.nacloSection, nacloSchema)
    if(!naClOResponse.success) errors.nacloErrors.push(...naClOResponse.error); errors.numErrors += errors.nacloErrors.length
    
    if(shift == 2) {
        const qcBrineResponse = await validate(req.body.qcBrineSection, qcBrineschema)
        if(!qcBrineResponse.success) errors.qcBrineErrors.push(...qcBrineResponse.error); errors.numErrors += errors.qcBrineErrors.length
    }

    const specificUsagesResponse = await validate(req.body.usagesSection, usagesSchema)
    if(!specificUsagesResponse.success) errors.usagesErrors.push(...specificUsagesResponse.error); errors.numErrors += errors.usagesErrors.length

    // const spEvalResponse = await validate(req.body.evalSection, spEvalSchema)
    // if(!spEvalResponse.success) errors.evalErrors.push(...spEvalResponse.error)
    let response = {
        success: errors.numErrors == 0? true:false,
        numErrors: errors.length,
        errors
    }

    if(response.success) {
        return res.status(200).json(response)
    } else {
        return res.json(response)
    }
}

// @method:     POST
// @access:     Private
// @desc:       This will validate values from the Shift Report
// @route:      /api/v1/shift_report/create
const createReport = async (req, res) => {
    console.log('In create report controller')

    // Get all the sections
    const {currentSupervisor, 
        manager, 
        incomingSupervisor, 
        date, 
        shift, 
        signCount, 
        isComplete,
        controlRoomSection, 
        hclSection, 
        evapSection, 
        prBrineSection, 
        electroSection, 
        nacloSection, 
        qcBrineSection, 
        usagesSection,
        evalSection 
    } = req.body

    try {
        var ctrlRoom = new ControlRoom(controlRoomSection); 
        await ctrlRoom.save()
        
        var hcl = new HCl(hclSection); 
        console.log(hcl)    
        await hcl.save()
        
        var evap = new Evaporator(evapSection);
        await evap.save()

        var prBrine = new PrimaryBrine(prBrineSection); 
        // await prBrine.save()

        var electro = new Electrolysis(electroSection); 
        // await electro.save()
    } catch(err) {
        console.log(err)
    }
}

module.exports = {validateData, createReport}