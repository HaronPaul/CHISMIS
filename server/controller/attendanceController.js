const ControlRoom = require('../model/ControlRoom')
const HCl = require('../model/HCl')
const Evaporator = require('../model/Evaporator')
const PrimaryBrine = require('../model/PrimaryBrine')
const Electrolysis = require('../model/Electrolysis')
const NaClO = require('../model/NaClO')

// Function helper for retrieving operators
// Parameters: Models
const retrieveOperators = async (Section1, month, year) => {   
    try {
        const section1Reponse =  await Section1.aggregate([  
            {$project: {
                present_operator: 1,
                shift: 1,
                date: 1,
                month: {$month: '$date'},
                year: {$year: '$date'}
            }},
            {$match: {
                month: month,
                year: year
            }},
            {$group: {
                _id: { dateString: {$dateToString: {format: `%Y-%m-%d`, date: "$date"}}},
                operators: {
                    $push: {present_operator: '$present_operator', shift: '$shift'}
                }
            }}
            ]
        )
        return section1Reponse
    } catch(err) {
        return err
    }
}


const getOperators = async (req,res) => {
    const month = parseInt(req.params.month)
    const selectedSection = parseInt(req.params.section)
    const year = parseInt(req.params.year)

    let section1
    let section2 
    try {

        // If 1, retrieve from Control Room and HCl Sections
        if(selectedSection === 1) {
            section1 = await retrieveOperators(ControlRoom, month, year)
            section2 = await retrieveOperators(HCl, month, year)
        } 
        // If 2, retrieve from Primary Brine and Evap
        else if(selectedSection === 2) {
            section1 = await retrieveOperators(PrimaryBrine, month, year)
            section2 = await retrieveOperators(Evaporator, month, year)
        // If 3, retrieve from NaClO and Electro 
        } else if(selectedSection === 3) {
            section1 = await retrieveOperators(NaClO, month, year)
            section2 = await retrieveOperators(Electrolysis, month, year)
        }

        if(section1 && section2) {
            console.log(section1)
            res.json({
                success: true,
                message: 'Successfully retrieved operators',
                section1: section1,
                section2: section2
            })
        }

    } catch(err) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: 'Something went wrong querying from database',
            err,
        })
    }
}

module.exports = {getOperators}