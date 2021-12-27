const express = require('express')
const dotenv = require('dotenv')

// Route files
const user = require('./routes/user')

// Load env vars
dotenv.config({path: '.config/config.env'})

const app = express()
const PORT = process.env.PORT || 5000

// Mount routers
app.use('/api/v1/user', user)

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} listening to Port ${PORT}`)
})


