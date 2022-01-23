const express = require('express')
const router = express.Router();
const {createUser} = require('../controller/user')

router.get('/', (req,res) => {
    res.send("In user routes")
})

router.post('/', createUser)

module.exports = router