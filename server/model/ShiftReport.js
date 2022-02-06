const mongoose = require('mongoose')

const ShiftReportSchema = new mongoose.Schema({
    currentSupervisor: {type: String, required: true},
    incomingSupervisor: {type: String, required: true},
    manager: {type: String, required: true},
    date: {type: Date, required: true},
    shift: {type: Number, min: 0, max: 3, required: true},
    signCount: {type: Number, min: 0, max: 3, required: true},  
    isComplete: {type: Boolean, required: true},
    controlRoomSection: {type: mongoose.Schema.Types.ObjectId, ref: 'control room'},
    hclSection: {type: mongoose.Schema.Types.ObjectId, ref: 'hcl'},
    evapSection: {type: mongoose.Schema.Types.ObjectId, ref: 'evaporator'},
    prBrineSection: {type: mongoose.Schema.Types.ObjectId, ref: 'primary'},
    electroSection: {type: mongoose.Schema.Types.ObjectId, ref: 'electrolysis'},
    nacloSection: {type: mongoose.Schema.Types.ObjectId, ref: 'naclo'},
    qcBrineSection: {type: mongoose.Schema.Types.ObjectId, ref: 'qc brine'},
    usagesSection: {type: mongoose.Schema.Types.ObjectId, ref: 'specific usage'},
    evalSection: {type: mongoose.Schema.Types.ObjectId, ref: 'sp evaluation'},
})

module.exports = ShiftReport = mongoose.model('shift report', ShiftReportSchema)