const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({path: './config.env'})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        })
        console.log('MongoDB Connected..')
    }
    catch(err) {
        console.error(err.message)
        // Exit proccess
        process.exit(1)
    }
}

module.exports = connectDB