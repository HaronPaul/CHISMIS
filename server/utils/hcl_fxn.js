const Joi = require('joi')

let schema = Joi.object({
    previous_operator: Joi.string().required().messages({
        'string.empty': 'Previous Operator Field Required'
    }),
    present_operator: Joi.string().required().messages({
        'string.empty': 'Present Operator Field Required'
    }),
    hcl_synth_eff: Joi.number().required().messages({
        'string.empty': 'HCL Synthesis Efficiency Field Required',
        'number.base': 'HCL Synthesis Efficiency must be a number'
    }),
    hcl_prod: Joi.number().required().messages({
        'string.empty': 'HCL Production Field Required',
        'number.base': 'HCL Production must be a number'
    }),
    scrubbed_cl_temp: Joi.number().required().messages({
        'string.empty': 'Scrubbed Cl Temperature Field Required',
        'number.base': 'Scrubbed Cl Temperature must be a number'
    }),
    hcl_prod_temp: Joi.number().required().messages({
        'string.empty': 'HCL Product Temperature Field Required',
        'number.base': 'HCL Product Temperature must be a number'
    }),
    hcl_conc: Joi.number().required().messages({
        'string.empty': 'HCL Concentration Field Required',
        'number.base': 'HCL Concentration Field must be a number'
    }),
    hcl_sg: Joi.number().required().messages({
        'string.empty': 'HCL Specific Gravity Field Required',
        'number.base': 'HCL Specific Gravity must be a number'
    }),
    sigri_cooling_water: Joi.number().required().messages({
        'string.empty': 'Sigri Cooling Water Field Required',
        'number.base': 'Sigri Cooling Water must be a number'
    }),
    hcl_space: Joi.number().required().messages({
        'string.empty': 'HCL Space Field Required',
        'number.base': 'HCL Space must be a number'
    }),
    clh20_flowrate: Joi.number().required().messages({
        'string.empty': 'ClH20 Flow Rate Field Required',
        'number.base': 'ClH20 Flow Rate must be a number'
    }),
    sigri_inlet_pressure_c: Joi.number().required().messages({
        'string.empty': 'Sigri Inlet Pressure Chlorine Required',
        'number.base': 'Sigri Inlet Pressure Chlorine must be a number'
    }),
    sigri_inlet_pressure_h: Joi.number().required().messages({
        'string.empty': 'Sigri Inlet Pressure Hydrogen Required',
        'number.base': 'Sigri Inlet Pressure Hydrogen must be a number'
    }),
    remarks: Joi.string().optional().allow('')
})

// This is a function for validating the values of the control room json object.
// This also adds a document to the db. When validation is successful, it returns
// an object with property 'success: true' with the objectID of the inserted document. 
const createHCl = async (data) => {
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

module.exports = {createHCl}