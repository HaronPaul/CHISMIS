const Joi = require('joi')
const ControlRoom = require('../model/ControlRoom')

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
        'number.base': 'Cells Voltage must be a number'
    }),
    cells_total_voltage: Joi.number().required().messages({
        'number.base': 'Cells Total Voltage must be a number'
    }),
    xformer_oil_temp: Joi.number().required().messages({
        'number.base': 'Transformer Oil Temperature value must be a number'
    }),
    remarks: Joi.string().optional().allow('')
})

// @route   POST ap1/v1/tabs/control_room
// @access  Private
// @desc    This will create a document for the control room tab information
const createControlRoom = async (data) => {
    let validation

    try {
        validation = await schema.validateAsync(data,{abortEarly: false})
        const newControlRoom = new ControlRoom(data)
        const savedDoc = await newControlRoom.save()
        console.log(savedDoc)
        return true
    } catch(error) {

        // If there is an error in validation
        if(!validation) {
            const errorMessages = error.details.map((detail) => {return detail.message})
            return {error: true, errorMessages}
        }
        return error
    }
}

// @route   GET ap1/v1/tabs/control_room
// @access  Private
// @desc    This will get a document from the control room collection
const getControlRoom = async(req,res) => {

}   

module.exports = {createControlRoom, getControlRoom}