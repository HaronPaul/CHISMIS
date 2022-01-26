const express = require('express')
const router = express.Router();
const {createUser, getUsers, editUser} = require('../controller/user')

// Route localhost:8000/api/v1/user
router.get('/', getUsers)
router.post('/', createUser)
router.put('/:id', editUser)

module.exports = router
