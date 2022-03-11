const express = require('express')
const dotenv = require('dotenv')    
const cors = require('cors')
const connectDB = require('./config/db')

// Route files
const user = require('./routes/user')
const shiftReport = require('./routes/shiftReport')
const weeklyReport = require('./routes/weeklyReport')
const inventory = require('./routes/inventory')
const attendance = require('./routes/atttendance')

// Load env vars
dotenv.config({path: './config/config.env'})

connectDB()
const app = express()
const PORT = process.env.PORT || 8000

// Middlewares 
app.use(express.json())
app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE")
    next()
})

// Mount routers
app.use('/api/v1/user', user)
app.use('/api/v1/shift_report', shiftReport)
app.use('/api/v1/weekly_report', weeklyReport)
app.use('/api/v1/inventory', inventory)
app.use('/api/v1/attendance', attendance)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} listening to Port ${PORT}`)
})