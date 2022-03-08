const fs = require('fs')
const {promisify} = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)

const updateInventory = async (ac) => {
    console.log(`ac is ${ac}`)
    try {
        const file = await readFileAsync(`${__dirname}/inventory.json`)
        const inventory = JSON.parse(file)

        const {ac_salt, ac_soda_ash, ac_naoh, ac_hcl, ac_bacl2,ac_flocullant, ac_na2so3} = ac
        inventory.ac_salt = inventory.ac_salt - ac_salt
        inventory.ac_soda_ash = inventory.ac_soda_ash - ac_soda_ash
        inventory.ac_naoh = inventory.ac_naoh - ac_naoh
        inventory.ac_hcl = inventory.ac_hcl - ac_hcl
        inventory.ac_bacl2 = inventory.ac_bacl2 - ac_bacl2
        inventory.ac_flocullant = inventory.ac_flocullant - ac_flocullant
        inventory.ac_na2so3 = inventory.ac_na2so3 - ac_na2so3
    
        await writeFileAsync(`${__dirname}/inventory.json`, JSON.stringify(inventory))
        return true
    } catch(err) {
        console.log(err)
        return false
    }
}

const getInventory = async () => {
    try {
        const file = await readFileAsync(`${__dirname}/inventory.json`)
        const inventory = JSON.parse(file)
        return inventory
    } catch(err) {
        console.log(err)
    }
}

module.exports = {updateInventory, getInventory}