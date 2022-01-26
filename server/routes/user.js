const express = require('express')
const router = express.Router();
const {createUser, getUsers, editUser} = require('../controller/user')
const login = require('../controller/login')

// Route localhost:8000/api/v1/user
router.get('/', getUsers)
router.post('/', createUser)
router.put('/:id', editUser)
router.get('/login', login)

module.exports = router
