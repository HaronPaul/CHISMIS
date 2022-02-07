const mongoose = require('mongoose')

const SpecUsages = new mongoose.Schema({
    ac_salt: {type: Number, required: true},
    ac_soda_ash: {type: Number, required: true},
    ac_naoh: {type: Number, required: true},
    ac_hcl: {type: Number, required: true},
    ac_bacl2: {type: Number, required: true},
    ac_flocullant: {type: Number, required: true},
    ac_na2so3: {type: Number, required: true},
    ac_alpha_cellulose: {type: Number, required: true},
    ac_power: {type: Number, required: true},
    ac_steam_evap: {type: Number, required: true},
    ac_steam_brine: {type: Number, required: true},
    // pdn_salt: {type: Number, required: true},
    // pdn_soda_ash: {type: Number, required: true},
    // pdn_naoh: {type: Number, required: true},
    // pdn_hcl: {type: Number, required: true},
    // pdn_bacl2: {type: Number, required: true},
    // pdn_flocullant: {type: Number, required: true},
    // pdn_na2so3: {type: Number, required: true},
    // pdn_alpha_cellulose: {type: Number, required: true},
    // pdn_power: {type: Number, required: true},
    // pdn_steam_evap: {type: Number, required: true},
    // pdn_steam_brine: {type: Number, required: true},
    clt_ph: {type: Number, required: true},
    cold_well_ph: {type: Number, required: true},
    total_ph: {type: Number, required: true},
    after_digester_ph: {type: Number, required: true},
    naoh_50: {type: Number, required: true},
    naoh_32: {type: Number, required: true},
    hcl: {type: Number, required: true},
    naocl: {type: Number, required: true},
    naocl_waste: {type: Number, required: true}
})

module.exports = specificUsages = mongoose.model('specific usages', SpecUsages)