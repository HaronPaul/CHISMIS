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
        'string.empty': 'NaOH Actual Consumption Field Required',
        'number.base': 'NaOH Actual Consumption must be a number'
    }),
    ac_hcl: Joi.number().required().messages({
        'string.empty': 'HCL Actual Consumption Field Required',
        'number.base': 'HCL Actual Consumption must be a number'
    }),
    ac_bacl2: Joi.number().required().messages({
        'string.empty': 'BaCl2 Actual Consumption Field Required',
        'number.base': 'BaCl2 Actual Consumption must be a number'
    }),
    ac_flocullant: Joi.number().required().messages({
        'string.empty': 'Flocullant Actual Consumption Field Required',
        'number.base': 'Flocullant Actual Consumption must be a number'
    }),
    ac_na2so3: Joi.number().required().messages({
        'string.empty': 'Na2SO3 Actual Consumption Field Required',
        'number.base': 'Na2SO3 Actual Consumption must be a number'
    }),
    ac_alpha_cellulose: Joi.number().required().messages({
        'string.empty': 'Alpha Cellulose Actual Consumption Field Required',
        'number.base': 'Alpha Cellulose Actual Consumption must be a number'
    }),
    ac_power: Joi.number().required().messages({
        'string.empty': 'Power Actual Consumption Field Required',
        'number.base': 'Power Actual Consumption must be a number'
    }),
    ac_steam_evap: Joi.number().required().messages({
        'string.empty': 'Steam Evap Actual Consumption Field Required',
        'number.base': 'Steam Evap Actual Consumption must be a number'
    }),
    ac_steam_brine: Joi.number().required().messages({
        'string.empty': 'Steam Brine Actual Consumption Field Required',
        'number.base': 'Steam Brine Actual Consumption must be a number'
    }),
    pdn_salt: Joi.number().required().messages({
        'string.empty': 'Salt per DMT NaOH Field Required',
        'number.base': 'Salt per DMT NaOH must be a number'
    }),
    pdn_soda_ash: Joi.number().required().messages({
        'string.empty': 'Soda Ash per DMT NaOH Field Required',
        'number.base': 'Soda Ash per DMT NaOH must be a number'
    }),
    pdn_naoh: Joi.number().required().messages({
        'string.empty': 'NaOH per DMT NaOH Field Required',
        'number.base': 'NaOH per DMT NaOH must be a number'
    }),
    pdn_hcl: Joi.number().required().messages({
        'string.empty': 'HCl per DMT NaOH Field Required',
        'number.base': 'HCl per DMT NaOH must be a number'
    }),
    pdn_bacl2: Joi.number().required().messages({
        'string.empty': 'BaCl2 per DMT NaOH Field Required',
        'number.base': 'BaCl2 per DMT NaOH must be a number'
    }),
    pdn_flocullant: Joi.number().required().messages({
        'string.empty': 'Flocullant per DMT NaOH Field Required',
        'number.base': 'Flocullant per DMT NaOH must be a number'
    }),
    pdn_na2so3: Joi.number().required().messages({
        'string.empty': 'Na2SO3 per DMT NaOH Field Required',
        'number.base': 'Na2SO3 per DMT NaOH must be a number'
    }),
    pdn_alpha_cellulose: Joi.number().required().messages({
        'string.empty': 'Alpha Cellulose per DMT NaOH Field Required',
        'number.base': 'Alpha Cellulose per DMT NaOH must be a number'
    }),
    pdn_power: Joi.number().required().messages({
        'string.empty': 'Power per DMT NaOH Field Required',
        'number.base': 'Power per DMT NaOH must be a number'
    }),
    pdn_steam_evap: Joi.number().required().messages({
        'string.empty': 'Steam Evap per DMT NaOH Field Required',
        'number.base': 'Steam Evap per DMT NaOH must be a number'
    }),
    pdn_steam_brine: Joi.number().required().messages({
        'string.empty': 'Steam Brine per DMT NaOH Field Required',
        'number.base': 'Steam Brine per DMT NaOH must be a number'
    }),
    clt_ph: Joi.number().required().messages({
        'string.empty': 'CLT pH Field Required',
        'number.base': 'CLT pH must be a number'
    }),
    cold_well_ph: Joi.number().required().messages({
        'string.empty': 'Cold Well pH Field Required',
        'number.base': 'Cold Well pH must be a number'
    }),
    total_ph: Joi.number().required().messages({
        'string.empty': 'Total pH Field Required',
        'number.base': 'Total pH must be a number'
    }),
    after_digester_ph: Joi.number().required().messages({
        'string.empty': 'After Digester pH Field Required',
        'number.base': 'After Digester pH must be a number'
    }),
    naoh_50: Joi.number().required().messages({
        'string.empty': '50% NaOH Field Required',
        'number.base': '50% NaOH must be a number'
    }),
    naoh_32: Joi.number().required().messages({
        'string.empty': '32% NaOH Field Required',
        'number.base': '32% NaOH must be a number'
    }),
    hcl: Joi.number().required().messages({
        'string.empty': 'HCl Product Transfer Field Required',
        'number.base': 'HCl Product Transfer must be a number'
    }),
    naocl: Joi.number().required().messages({
        'string.empty': 'NaOCl Product Transfer Field Required',
        'number.base': 'NaOCl Product Transfer must be a number'
    }),
    naocl_waste: Joi.number().required().messages({
        'string.empty': 'NaOCl to waste treatment Field Required',
        'number.base': 'NaOCl to waste treatment must be a number'
    })
})

const createSpecificUsages = async (data) => {
    let validation

    try {
        validation = await schema.validateAsync(data, {abortEarly: false})
        return {success: true}
    } catch(error) {
        // Get the validation errors
        if(!validation) {
            const errorMessages = error.details.map((details) => {return details.message})
            return {success: false, error: errorMessages}
        }
        const err = new Error('Database Error', {cause: error})
        return {success: false, error: err}
    }
}

module.exports = {createSpecificUsages}