const mongoose = require('mongoose')

const ElectroSchema = new mongoose.Schema({
    previous_operator: {type: String, required: true},
    present_operator: {type: String, required: true},
    electro_eff: {type: Number, required: true},
    cell_liq_prod: {type: Number, required: true},
    spb_inlet_temp: {type: Number, required: true},
    naoh_inlet_temp: {type: Number, required: true},
    chelate_op_hours_ta: {type: Number, required: true},
    chelate_op_hours_tb: {type: Number, required: true},
    naoh_conc: {type: Number, required: true},
    naoh_sg: {type: Number, required: true},
    naoh_total_volume: {type: Number, required: true},
    naoh_flowrate: {type: Number, required: true},
    db_free_cl_qual: {type: String, required: true},
    num_n_cylinders: {type: Number, required: true},
    decomposer_op_temp: {type: Number, required: true},
    db_conc: {type: Number, required: true},
    spb_conc: {type: Number, required: true},
    full_n2: {type: Number, required: true},
    remarks: ''
})

module.exports = Electrolysis = mongoose.model('electrolysis', ElectroSchema)