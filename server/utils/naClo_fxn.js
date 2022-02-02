const Joi = require('joi')

const schema = Joi.object({
    previous_operator: Joi.string().trim().required().messages({
        'string.empty': 'Previous Operator Field Required'
    }),
    present_operator: Joi.string().trim().required().messages({
        'string.empty': 'Present Operator Field Required'
    }),
    naclo_ct1: Joi.number().required().messages({
        'string.empty': 'NaClO Circulation Tank 1 Field Required',
        'number.base': 'NaClO Circulation Tank 1 must be a number'
    }),
    naclo_ct2: Joi.number().required().messages({
        'string.empty': 'NaClO Circulation Tank 2 Field Required',
        'number.base': 'NaClO Circulation Tank 2 must be a number'
    }),
    naclo_ct3: Joi.number().required().messages({
        'string.empty': 'NaClO Circulation Tank 3 Field Required',
        'number.base': 'NaClO Circulation Tank 3 must be a number'
    }),
    naclo_ct4: Joi.number().required().messages({
        'string.empty': 'NaClO Circulation Tank 4 Field Required',
        'number.base': 'NaClO Circulation Tank 4 must be a number'
    }),
    fline1: Joi.number().required().messages({
        'string.empty': 'Filter Line 1 Field Required',
        'number.base': 'Filter Line 1 must be a number'
    }), 
    fline2: Joi.number().required().messages({
        'string.empty': 'Filter Line 2 Field Required',
        'number.base': 'Filter Line 2 must be a number'
    }), 
    fline3: Joi.number().required().messages({
        'string.empty': 'Filter Line 3 Field Required',
        'number.base': 'Filter Line 3 must be a number'
    }), 
    fline4: Joi.number().required().messages({
        'string.empty': 'Filter Line 4 Field Required',
        'number.base': 'Filter Line 4 must be a number'
    }), 
    naoh_ct1: Joi.number().required().messages({
        'string.empty': 'Excess NaOH CT1 Field Required',
        'number.base': 'Excess NaOH CT1 must be a number'
    }),
    naoh_ct2: Joi.number().required().messages({
        'string.empty': 'Excess NaOH CT2 Field Required',
        'number.base': 'Excess NaOH CT2 must be a number'
    }),
    naoh_ct3: Joi.number().required().messages({
        'string.empty': 'Excess NaOH CT3 Field Required',
        'number.base': 'Excess NaOH CT3 must be a number'
    }),
    naoh_ct4: Joi.number().required().messages({
        'string.empty': 'Excess NaOH CT4 Field Required',
        'number.base': 'Excess NaOH CT4 must be a number'
    }),
    storage1: Joi.number().required().messages({
        'string.empty': 'Storage 1 Field Required',
        'number.base': 'Storage 1 must be a number'
    }),
    storage2: Joi.number().required().messages({
        'string.empty': 'Storage 2 Field Required',
        'number.base': 'Storage 2 must be a number'
    }),
    storage3: Joi.number().required().messages({
        'string.empty': 'Storage 3 Field Required',
        'number.base': 'Storage 3 must be a number'
    }),
    storage4: Joi.number().required().messages({
        'string.empty': 'Storage 4 Field Required',
        'number.base': 'Storage 4 must be a number'
    }),
    remarks: Joi.string().optional().allow('')
})

const createNaClO = async (data) => {
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

module.exports = {createNaClO}