const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
// Route files
const user = require('./routes/user')

// Load env vars
dotenv.config({path: './config/config.env'})

// connectDB()
const app = express()
const PORT = process.env.PORT || 5000

// Middlewares 
app.use(express.json())

// Mount routers
app.use('/api/v1/user', user)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} listening to Port ${PORT}`)
})