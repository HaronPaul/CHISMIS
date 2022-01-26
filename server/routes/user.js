const express = require('express')
const router = express.Router();
const {createUser, getUsers} = require('../controller/user')

// Route localhost:8000/api/v1/user
router.get('/', getUsers)
router.post('/', createUser)

module.exports = router