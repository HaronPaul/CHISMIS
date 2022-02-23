const mongoose = require('mongoose')

const PrBrineSchema = new mongoose.Schema({
    previous_operator: {type: String, required: true},
    present_operator: {type: String, required: true},
    incoming_operator: {type: String, required: true},
    salt_loaded: {type: Number, required: true},
    pbrine_conc: {type: Number, required: true},
    precoat: {type: String, required: true},
    precoat_op_hours: {type: Number, required: true},
    camg_conc: {type: Number, required: true},
    xcess_naoh_conc: {type: Number, required: true},
    diff_pressure_precoat: {type: Number, required: true},
    brine_overflow: {type: String, required: true},
    xcess_na2co3_conc: {type: Number, required: true},
    precoat_flowrate: {type: Number, required: true},
    remarks: {type: Number, required: true}
})

module.exports = PrimaryBrine = mongoose.model('primary brine', PrBrineSchema)