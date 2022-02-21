const mongoose = require('mongoose')

const HClSchema = new mongoose.Schema({
    previous_operator: { type: String, required: true },
    present_operator: { type: String, required: true },
    incoming_operator: { type: String, required: true },
    hcl: {type: Number, required: true},
    hcl_eff: {type: Number, required: true},
    hcl_prod_temp: { type: Number, required: true },
    scrubbed_cl_temp: { type: Number, required: true },
    hcl_conc: { type: Number, required: true },
    hcl_sg: { type: Number, required: true },
    sigri_cooling_water: { type: Number, required: true },
    hcl_space: { type: Number, required: true },
    clh20_flowrate: { type: Number, required: true },
    sigri_inlet_pressure_c: { type: Number, required: true },
    sigri_inlet_pressure_h: { type: Number, required: true },
    full_n2: {type: Number, required: true},
    remarks: {type: String}
})

module.exports = HCl = mongoose.Model('hcl', HClSchema)
