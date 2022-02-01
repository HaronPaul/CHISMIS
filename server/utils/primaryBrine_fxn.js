const Joi = require('joi')

const schema = Joi.object({
    previous_operator:  Joi.string().required().messages({
        'string.empty': 'Previous Operator Field Required'
    }),
    present_operator:  Joi.string().required().messages({
        'string.empty': 'Previous Operator Field Required'
    }),
    salt_loaded: Joi.number().required().messages({
        'string.empty': 'Salt Loaded field required',
        'number.base': 'Salt Loaded must be a number'
    }),
    pbrine_conc: Joi.number().required().messages({
        'string.empty': 'Polished Brine Concentration required',
        'number.base': 'Polished Brine  Concentration must be a number'
    }),
    precoat_op_hours: Joi.number().required().messages({
        'string.empty': 'Precoat Operating Hours required',
        'number.base': 'Precoat Operating Hours must be a number'
    }),
    camg_conc: Joi.number().required().messages({
        'string.empty': 'Ca+Mg Concentration field required',
        'number.base': 'Ca+Mg Concentration value must be a number'
    }),
    xcess_naoh_conc: Joi.number().required().messages({
        'string.empty': 'Excess NaOH Concentration required',
        'number.base': 'Excess NaOH Concentration must be a number'
    }),
    diff_pressure_precoat: Joi.number().required().messages({
        'string.empty': 'Differential Pressure in Precoat required',
        'number.base': 'Differential Pressure in Precoat must be a number'
    }),
    brine_overflow: Joi.number().required().messages({
        'string.empty': 'Brine Overflow required',
        'number.base': 'Brine Overflow must be a number'
    }),
    xcess_na2co3_conc: Joi.number().required().messages({
        'string.empty': 'Excess Na2CO3 required',
        'number.base': 'Excess Na2CO3 must be a number'
    }),
    precoat_flowrate: Joi.number().required().messages({
        'string.empty': 'Precoat Flow Rate required',
        'number.base': 'Precoat Flow Rate must be a number'
    }),
    remarks: Joi.string().optional().allow('')
})

const createPrimaryBrine = async (data) => {
    let validation
    try {
        validation = await schema.validateAsync(data, {abortEarly: false})
        return {success: true}
    } catch(error) {
        
        if(!validation) {
            const errorMessages = error.details.map((detail) => {return detail.message})
            return {success: false, errorMessages}
        }
        const err = new Error('Database Error', {cause: error})
        return {success: false, error: err}
    }
}

module.exports = {createPrimaryBrine}
