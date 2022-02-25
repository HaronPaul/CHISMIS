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
const NaClO = require('../model/NaClO')
const SpecificUsages = require('../model/SpecificUsages')
const QCBrine = require('../model/QCBrine')
const SPEvaluation = require('../model/SPEvaluation')

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

    if(date) {
        var dateSplit = date.split('/')
        var month = parseInt(dateSplit[0])
        var day = parseInt(dateSplit[1])
        var year = parseInt(dateSplit[2])
        console.log(new Date(year, month-1, day+1))
        const reportExist = await ShiftReport.findOne({date: new Date(year, month-1, day+1), shift: shift}, {_id: 1})
        console.log(reportExist)
        if(reportExist) {
            errors.shiftReportErrors.push('Shift Report for this day and shift already exists')
            errors.numErrors += errors.shiftReportErrors.length
        }
    }



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
    
    // Get all the sections
    const {
        currentSupervisor, 
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

    var dateSplit = date.split('/')
    var month = parseInt(dateSplit[0])
    var day = parseInt(dateSplit[1])
    var year = parseInt(dateSplit[2])

    const jsDate = new Date(year, month-1, day+1)
    console.log(`jsdate is ${jsDate}`)
    try {
        var ctrlRoom = new ControlRoom({...controlRoomSection, date: jsDate, shift}); 
        if(ctrlRoom) await ctrlRoom.save()
        var hcl = new HCl({...hclSection, date: jsDate, shift});
        if(hcl) await hcl.save()
        var evap = new Evaporator({...evapSection, date: jsDate, shift});
        if(evap) await evap.save()
        var prBrine = new PrimaryBrine({...prBrineSection, date: jsDate, shift}); 
        if(prBrine) await prBrine.save()
        var electro = new Electrolysis({...electroSection, date: jsDate, shift}); 
        if(electro) electro.save()
        var naclo = new NaClO({...nacloSection, date: jsDate, shift})
        if(naclo) naclo.save()
        var usages = new SpecificUsages({...usagesSection, date: jsDate, shift})
        if(usages) usages.save()
        var speval = new SPEvaluation({...evalSection, date: jsDate, shift})
        if(speval) speval.save()

        if(shift == 2) {
            var qcbrine = new QCBrine({...qcBrineSection, date: jsDate, shift})
            await qcbrine.save()
        }

        var newShiftReport = new ShiftReport({
            currentSupervisor, 
            manager, 
            incomingSupervisor, 
            date: jsDate, 
            shift, 
            signCount, 
            isComplete,
            controlRoomSection: ctrlRoom.id,
            hclSection: hcl.id,
            evapSection: evap.id,
            prBrineSection: prBrine.id,
            electroSection: electro.id, 
            nacloSection: naclo.id,
            qcBrineSection: shift == 2? qcbrine.id:null,
            usagesSection: usages.id,
            evalSection: speval.id,
        })
        await newShiftReport.save()
        res.json({
            success: true,
            message: 'Successfully added report'
        })
    } catch(err) {
        console.error(err)
        res.json({
            success: false,
            message: 'An error occured in storing the report'
        })
    }
}

const getMTD = (req,res) => {


}

module.exports = {validateData, createReport, getMTD}