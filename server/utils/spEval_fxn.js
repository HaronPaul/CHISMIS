const Joi = require('joi')

const schema = Joi.object({
    plan_vol_att: Joi.string().trim().required().valid("YES", "NO").messages({
        'string.empty': 'Planned Volume Attained Required',
        'any.only': 'Planned Volume Attained  Value must be either YES or NO'
    }),
    prod_num_offspecs: Joi.string().trim().required().valid("YES", "NO").messages({
        'string.empty': 'Production No. Off Specs Required',
        'any.only': 'Production No. Off Specs Value must be either YES or NO'
    }),
    spec_usage: Joi.string().trim().required().valid("YES", "NO").messages({
        'string.empty': 'Specific Usages lte standard Required',
        'any.only': 'Specific Usages lte standard Value must be either YES or NO'
    }),
    proc_ctrl_range: Joi.string().trim().required().valid("YES", "NO").messages({
        'string.empty': 'Process Control within ranged Required',
        'any.only': 'Process Control within ranged Value must be either YES or NO'
    }),
    manpower_no_24duty: Joi.string().trim().required().valid("YES", "NO").messages({
        'string.empty': 'Manpower no 24hrs duty Required',
        'any.only': 'Manpower no 24hrs duty Value must be either YES or NO'
    }),
    shift_report_completeness: Joi.string().trim().required().valid("YES", "NO").messages({
        'string.empty': 'Shift Report completeness Required',
        'any.only': 'Shift Report completeness Required value must be either YES or NO'
    }),
    shift_rating: Joi.string().trim().required().valid("FAILURE", "POOR", "LOW SATISFACTORY", "SATISFACTORY", "HIGH STATISFACTORY", "PERFECT").messages({
        'string.empty': 'DAQ Operational Required',
        'any.only': 'Value must be either FAILUER, LOW SATISFACTORY, SATISFACTORY, HIGH STATISFACTORY, or PERFECT'
    })
})

const createSpEval = async (data) => {
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

module.exports = {createSpEval}