const express = require('express')
const router = express.Router()
const {getCurrentInventory, updateCurrentInventory} = require('../controller/inventoryController')

router.get('/getInventory', getCurrentInventory)
router.put('/updateInventory', updateCurrentInventory)

module.exports = router