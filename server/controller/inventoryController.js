const {updateInventory, getInventory} = require('../utils/inventoryHelpers')

// @method:     GET
// @access:     Public
// @desc:       This will validate values from the Shift Report
// @route:      /api/v1/inventory/getInventory
const getCurrentInventory = async (req,res) => {
    const inventory = await getInventory()
    if(inventory){
        return res.status(200).json({
            success: true,
            message: 'Successfully retrieved data',
            data: {...inventory}
        })
    } else {
        return res.status(400).json({
            success: false,
            message: 'Something went wrong',
        })
    }
}

// @method:     PUT
// @access:     Private
// @desc:       This will validate values from the Shift Report
// @route:      /api/v1/inventory/updateInventory
const updateCurrentInventory = async (req,res) => {
    const currentInventory = req.body
    if(currentInventory) {
        const updateSuccess = updateInventory(currentInventory)
        if(updateSuccess) {
            res.status(200).json({
                success: true,
                message: 'Successfully updated inventory'
            })
        } else {
            res.status(400).json({
                success: false,
                message: 'Update unsuccessful'
            })
        }
    } else {
        res.status(400).json({
            success: false,
            message: 'Something went wrong'
        })
    }
}




module.exports = {getCurrentInventory, updateCurrentInventory}