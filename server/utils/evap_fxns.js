const Joi = require('joi')

const schema = Joi.object({
    previous_operator: Joi.string().required().messages({
        'string.empty': 'Previous Operator Field Required'
    }),
    present_operator:  Joi.string().required().messages({
        'string.empty': 'Present Operator Field Required'
    }),
    evap_eff: Joi.number().required().messages({
        'string.empty': 'Evaporator Efficiency field required',
        'number.base': 'Evaporator Efficiency must be a number'
    }),
    naoh_prod: Joi.number().required().messages({
        'string.empty': 'NaOH Production field required',
        'number.base': 'NaOH Production must be a number'
    }),
    evap_feed_flowrate: Joi.number().required().messages({
        'string.empty': 'Evap Feed Flow Rate field required',
        'number.base': 'Evap Feed Flow Rate must be a number'
    }),
    naoh_conc: Joi.number().required().messages({
        'string.empty': 'NaOH Concentration field required',
        'number.base': 'NaOH Concentration must be a number'
    }),
    naoh_sg: Joi.number().required().messages({
        'string.empty': 'NaOH Specific Gravity field required',
        'number.base': 'NaOH Specific Gravity must be a number'
    }),
    t8_level: Joi.number().required().messages({
        'string.empty': 'Tank 8 Level field required',
        'number.base': 'Tank 8 Level must be a number'
    }),
    t9_level: Joi.number().required().messages({
        'string.empty': 'Tank 9 Level field required',
        'number.base': 'Tank 9 Level must be a number'
    }),
    vacuum_pressure: Joi.number().required().messages({
        'string.empty': 'Vacuum Pressure field required',
        'number.base': 'Vacuum Pressure must be a number'
    }),
    remarks: Joi.string().optional().allow('')
})
    
const createEvap = async (data) => {
    let validation
    try {
        validation = await schema.validateAsync(data, {abortEarly: false}) 
        return {success: true}
    }
    catch(error) {
        // Get validation errors
        if(!validation) {
            const errorMessages = error.details.map((details) => {return details.message})
            console.log(error.details)
            return {success: false, error: errorMessages}
        }
        const err = new Error('Database Error', {cause: error})
        return {success: false, error: err}
    }
}

module.exports = {createEvap}