const mongoose = require('mongoose')

const EvapSchema = new mongoose.Schema({
    previous_operator: {type: String, required: true},
    present_operator: {type: String, required: true},
    incoming_operator: {type: String, required: true},
    evap_eff: {type: Number, required: true},
    naoh_prod: {type: Number, required: true},
    naoh_total_volume: {type: Number, required: true},
    evap_feed_flowrate: {type: Number, required: true},
    naoh_conc: {type: Number, required: true},
    naoh_sg: {type: Number, required: true},
    t8_level: {type: Number, required: true},
    t9_level: {type: Number, required: true},
    vacuum_pressure: {type: Number, required: true},
    remarks: ''
})

module.exports = Evaporator = mongoose.model('evaporator', EvapSchema)