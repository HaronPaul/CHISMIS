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
        'string.empty': 'Rectifier Raw Water field required',
        'number.base': 'Rectifier Raw Water value must be a number'
    }),
    cells: Joi.number().required().messages({
        'string.empty': 'Cells field required',
        'number.base': 'Number of cells must be a number'
    }),
    avg_load: Joi.number().required().messages({
        'string.empty': 'Average Load field required',
        'number.base': 'Average Load must be a number'
    }),
    eos_load: Joi.number().required().messages({
        'string.empty': 'End of Shift Load field required',
        'number.base': 'End of Shift Load must be a number'
    }),
    rd_water: Joi.number().required().messages({
        'string.empty': 'Rectifier Demi Water required',
        'number.base': 'Rectifier Demi Water must be a number'
    }),
    cells_voltage: Joi.number().required().messages({
        'string.empty': 'Cells Voltage field required',
        'number.base': 'Cells Voltage must be a number'
    }),
    cells_total_voltage: Joi.number().required().messages({
        'string.empty': 'Cells Total Voltage required',
        'number.base': 'Cells Total Voltage must be a number'
    }),
    xformer_oil_temp: Joi.number().required().messages({
        'string.empty': 'Transformer Oil Temperaturerequired',
        'number.base': 'Transformer Oil Temperature value must be a number'
    }),
    remarks: Joi.string().optional().allow('')
})

// This is a function for validating the values of the control room json object.
// This also adds a document to the db. When validation is successful, it returns
// an object with property 'success: true' with the objectID of the inserted document. 
const createControlRoom = async (data) => {
    let validation
    
    try {
        validation = await schema.validateAsync(data,{abortEarly: false})
        // const newControlRoom = new ControlRoom(data)
        // const savedDoc = await newControlRoom.save()
        return {success: true}
    } catch(error) {

        // If there is an error in validation
        if(!validation) {
            const errorMessages = error.details.map((detail) => {return detail.message})
            return {success: false, errorMessages}
        }
        return error
    }
}


const getControlRoom = async(req,res) => {

}   

module.exports = {createControlRoom, getControlRoom}