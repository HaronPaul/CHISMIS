const express = require('express')
const router = express.Router()
const {getCurrentInventory, updateCurrentInventory, resetInventory} = require('../controller/inventoryController')

router.get('/getInventory', getCurrentInventory)
router.put('/updateInventory', updateCurrentInventory)
router.put('/resetInventory', resetInventory)

module.exports = router