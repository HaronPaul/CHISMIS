const express = require('express')
const router = express.Router();
const {createUser, getUsers, editUser} = require('../controller/userController')
const login = require('../controller/loginController')

// Route localhost:8000/api/v1/user
router.get('/', getUsers)
router.post('/', createUser)
router.post('/login', login)
router.put('/:id', editUser)

module.exports = router
