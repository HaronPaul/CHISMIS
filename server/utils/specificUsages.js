const Joi = require('joi')

const schema = Joi.object({
    ac_salt: Joi.number().required().messages({
        'string.empty': 'Salt Actual Consumption Field Required',
        'number.base': 'Salt Actual Consumption must be a number'
    }),
    ac_soda_ash: Joi.number().required().messages({
        'string.empty': 'Soda Ash Actual Consumption Field Required',
        'number.base': 'Soda Ash Actual Consumption must be a number'
    }),
    ac_naoh: Joi.number().required().messages({
        'string.empty': ' Field Required',
        'number.base': ' must be a number'
    }),
    ac_hcl: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    ac_bacl2: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    ac_flocullant: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    ac_na2so3: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    ac_alpha_cellulose: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    ac_power: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    ac_steam_evap: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    ac_steam_brine: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_salt: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_soda_ash: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_naoh: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_hcl: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_bacl2: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_flocullant: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_na2so3: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_alpha_cellulose: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_power: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_steam_evap: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    pdn_steam_brine: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    clt_ph: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    cold_well_ph: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    total_ph: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    after_digester_ph: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    naoh_50: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    naoh_32: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    hcl: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    naocl: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    naocl_waste: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    })
})