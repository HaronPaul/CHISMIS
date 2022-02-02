const Joi = require('joi')

const schema = Joi.object({
    spb_camg: Joi.number().required().messages({
        'string.empty': 'SPB Ca+MG Field Required',
        'number.base': 'SPB Ca+MG must be a number'
    }),
    spb_naclo3: Joi.number().required().messages({
        'string.empty': 'SPB NaClO3 Field Required',
        'number.base': 'SPB NaClO3 must be a number'
    }),
    spb_na2so4: Joi.number().required().messages({
        'string.empty': 'SPB Na2SO4 Field Required',
        'number.base': 'SPB Na2SO4 must be a number'
    }),
    db_naclo3: Joi.number().required().messages({
        'string.empty': 'DB NaCLO3 Field Required',
        'number.base': 'DB NaCLO3 must be a number'
    }),
    db_nacl: Joi.number().required().messages({
        'string.empty': 'DB NaCl Field Required',
        'number.base': 'DB NaCl must be a number'
    }),
    db_free_cl: Joi.number().required().messages({
        'string.empty': 'DB Free Cl Quality Field Required',
        'number.base': 'DB Free Cl Quality must be a number'
    }),
    naoh_conc_50: Joi.number().required().messages({
        'string.empty': '50% NaOH Concentration Field Required',
        'number.base': '50% NaOH Concentration must be a number'
    }),
    naoh_conc_32: Joi.number().required().messages({
        'string.empty': '32% NaOH Concentration Field Required',
        'number.base': '32% NaOH Concentration must be a number'
    }),
    naohfe_conc: Joi.number().required().messages({
        'string.empty': 'NaOH Fe Concentration Field Required',
        'number.base': 'NaOH Fe Concentration must be a number'
    }),
    hcl_online: Joi.number().required().messages({
        'string.empty': 'HCl Online Field Required',
        'number.base': 'HCl Online must be a number'
    }),
    remarks: Joi.string().optional().allow('')
})

const createQcBrine = async (data) => {
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

module.exports = {createQcBrine}