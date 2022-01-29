const mongoose = require('mongoose')

const ControlRoomSchema = new mongoose.Schema({
    previous_operator: {
        type: String,
        required: true
    }, 
    present_operator: {
        type: String,
        required: true
    },
    interlock_engaged: {
        type: String,
        required: true,
        enum: ['YES', 'NO', 'PARTIAL']
    }, 
    daq_operational: {
        type: String,
        required: true,
        enum: ['YES', 'NO', 'PARTIAL']
    },
    rr_water: {
        type: Number,
        required: true
    },
    cells: {
        type: Number,
        required: true
    },
    avg_load: {
        type: Number,
        required: true
    },
    eos_load: {
        type: Number,
        required: true
    },
    rd_water: {
        type: Number,
        required: true
    },
    cells_voltage: {
        type: Number,
        required: true
    },
    xformer_oil_temp: {
        type: Number,
        required: true
    },
    remarks: {
        type: String,
        required: true
    }
})

module.exports = ControlRoom = mongoose.model('control room', ControlRoomSchema)