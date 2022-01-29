const Joi = require('joi')

// Validation for data control room data
let schema = Joi.object({
    previous_operator: Joi.string().required().messages({
        'string.empty': 'Previous Operator Field Required'
    }),
    present_operator:  Joi.string().required().messages({
        'string.empty': 'Present Operator Field Required'
    }),
    interlock_engaged:  Joi.string().required().valid("YES", "NO", "PARTIAL").messages({
        'string.empty': 'Interlock Engaged field required',
        'any.only': 'Interlock Engaged Value must be either YES, NO, or PARTIAL'
    }),
    daq_operational:  Joi.string().required().valid("YES", "NO", "PARTIAL").messages({
        'string.empty': 'DAQ Operational Field Required',
        'any.only': 'Value must be either YES, NO, or PARTIAL'
    }),
    rr_water: Joi.number().required().messages({
        'number.base': 'Rectifier Raw Water value must be a number'
    }),
    cells: Joi.number().required().messages({
        'number.base': 'Number of cells must be a number'
    }),
    avg_load: Joi.number().required().messages({
        'number.base': 'Average Load must be a number'
    }),
    eos_load: Joi.number().required().messages({
        'number.base': 'End of Shift Load must be a number'
    }),
    rd_water: Joi.number().required().messages({
        'number.base': 'Rectifier Demi Water must be a number'
    }),
    cells_voltage: Joi.number().required().messages({
        'number.base': 'Cells Total Voltage must be a number'
    }),
    xformer_oil_temp: Joi.number().required().messages({
        'number.base': 'Transformer Oil Temperature value must be a number'
    }),
    remarks: Joi.string()
})

// @route   ap1/v1/tabs/control_room
// @access  Private
// @desc    This will create a document for the control room tab information
const createControlRoom = async (req, res) => {
    let validation
    data = req.body

    try {
        validation = await schema.validateAsync(data,{abortEarly: false})
        return res.status(200).json({
            success: true,
            message: 'Successfully added control room info'
        })

    } catch(error) {
        // If there is an error in validation
        if(!validation) {
            const errorMessages = error.details.map((detail) => {return detail.message})
            return res.status(400).json(errorMessages)
        }
        res.status(400).json(error)
    }
}

module.exports = {createControlRoom}