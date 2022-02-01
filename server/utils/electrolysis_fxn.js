const Joi = require('joi')

const schema = Joi.object({
    previous_operator: Joi.string().required().messages({
        'string.empty': 'Previous Operator Field Required'
    }),
    present_operator: Joi.string().required().messages({
        'string.empty': 'Present Operator Field Required'
    }),
    electro_eff:  Joi.number().required().messages({
        'string.empty': 'Electrolyzer Efficiency required',
        'number.base': 'Electrolyzer Efficiency must be a number'
    }),
    cell_liq_prod:  Joi.number().required().messages({
        'string.empty': 'Cell Liquor Field Required',
        'number.base': 'Cell Liquor must be a number'
    }),
    spb_inlet_temp:  Joi.number().required().messages({
        'string.empty': 'SPB Inlet Temperature Field Required',
        'number.base': 'SPB Inlet Temperature must be a number'
    }),
    naoh_inlet_temp:  Joi.number().required().messages({
        'string.empty': 'NaOH Inlet Temperature Field Required',
        'number.base': 'NaOH Inlet Temperature must be a number'
    }),
    chelate_op_hours_ta:  Joi.number().required().messages({
        'string.empty': 'Chelate Operating Hours Tower A Field Required',
        'number.base': 'Chelate Operating Hours Tower A must be a number'
    }),
    chelate_op_hours_tb:  Joi.number().required().messages({
        'string.empty': 'Chelate Operating Hours Tower B Field Required',
        'number.base': 'Chelate Operating Hours Tower B must be a number'
    }),
    naoh_conc:  Joi.number().required().messages({
        'string.empty': 'NaOH Concentration Field Required',
        'number.base': 'NaOH Concentration must be a number'
    }),
    naoh_sg:  Joi.number().required().messages({
        'string.empty': 'NaOH Specific Gravity Field Required',
        'number.base': 'NaOH Specific Gravity must be a number'
    }),
    naoh_flowrate:  Joi.number().required().messages({
        'string.empty': 'NaOH Flow Rate Field Required',
        'number.base': 'NaOH Flow Rate must be a number'
    }),
    db_free_cl_qual:  Joi.number().required().messages({
        'string.empty': 'DB Free Cl Quality Field Required',
        'number.base': 'DB Free Cl Quality must be a number'
    }),
    num_n_cylinders:  Joi.number().required().messages({
        'string.empty': 'Number of N Cylinders Field Required',
        'number.base': 'Number of N Cylinders must be a number'
    }),
    decomposer_op_temp:  Joi.number().required().messages({
        'string.empty': 'Decomposer Operating Temperature Field Required',
        'number.base': 'Decomposer Operating Temperature must be a number'
    }),
    db_conc:  Joi.number().required().messages({
        'string.empty': 'DB Concentration Field Required',
        'number.base': 'DB Concentration must be a number'
    }),
    spb_conc:  Joi.number().required().messages({
        'string.empty': 'SPB Concentration Field Required',
        'number.base': 'SPB Concentration must be a number'
    }),
    remarks: Joi.string().optional().allow('')
})

const createElectrolysis = async (data) => {
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

module.exports = {createElectrolysis}