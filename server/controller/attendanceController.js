const _ = require('lodash')

const ControlRoom = require('../model/ControlRoom')
const HCl = require('../model/HCl')
const Evaporator = require('../model/Evaporator')
const PrimaryBrine = require('../model/PrimaryBrine')
const Electrolysis = require('../model/Electrolysis')
const NaClO = require('../model/NaClO')
const data = require('./tempData')

// Function helper for retrieving attendance of each operator
// Parameters: Model, month in int, and year in int
const retrieveOperatorsShift = async (Section1, month, year) => {   
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

// Function helper for retrieving names of operator from each section
// Parameters: Model, month in int, and year in int
const retrieveOperators = async (Section, month, year) => {
    try {
        const operatorsResponse = await Section.aggregate(
            [
                {$project: {
                    present_operator: 1, 
                    shift: 1, 
                    date: 1, 
                    month: {
                      $month: '$date'
                    }, 
                    year: {
                      $year: '$date'
                    }
                }}, 
                {$match: {
                    month: month,
                    year: year
                }},
                {$group: {
                    _id: null, 
                    operators: {
                      $addToSet: '$present_operator'
                    }
                }}
              ]
        )
        return operatorsResponse
    } catch(err) {
        return err
    }
}

const markAttendanceMap = (attendanceMap, section) => {
    section.forEach((d) => {
        const day = parseInt((d._id.dateString).split('-')[2])
        // Loop throught each shift and set the value in the array in the attendance map
        d.operators.forEach((op) => {
            if(attendanceMap.get(op.present_operator)[day-1] === '') {
                attendanceMap.get(op.present_operator)[day-1] = (op.shift).toString()
            } else {
                attendanceMap.get(op.present_operator)[day-1] = attendanceMap.get(op.present_operator)[day-1] + "/" + (op.shift).toString()
            }
        })
    })
}

const getOperators = async (req,res) => {
    const month = parseInt(req.params.month)
    const selectedSection = parseInt(req.params.section)
    const year = parseInt(req.params.year)

    let sections = []
    let section1
    let section2
    let operators1
    let operators2

    try {
        // If 1, retrieve from Control Room and HCl Sections, 2 retrieve from Primary Brine and Electrolysis
        switch(selectedSection) {
            case 1: 
                sections = [...[ControlRoom, HCl]]
                break
            case 2: 
                sections = [...[PrimaryBrine, Electrolysis]]
                break
            case 3: 
                sections = [...[NaClO, Evaporator]]
                break
            default: sections = [...[ControlRoom, HCl]]
        }

        section1 = await retrieveOperatorsShift(sections[0], month, year)
        section2 = await retrieveOperatorsShift(sections[1], month, year)

        if(section1.length > 0 && section2.length > 0) {
            // Get the operators
            operators1 = await retrieveOperators(sections[0], month, year)
            operators2 = await retrieveOperators(sections[1], month, year)

            // Map's keys are the name of the operators. Value of each key is an array containing (n days of months) elements  
            var attendanceMap = new Map()
            const sectionOperators = _.union(operators1[0].operators, operators2[0].operators)
            // const sectionOperators = ['Haron Paul Lorente', 'Hannah Patriz Lorente', 'Jazon Troy Jaralve']
            
            // Get the number of days. This will be used for the size of the array
            const numOfDays = new Date(year, month, 0).getDate()
            sectionOperators.forEach((op)=> {
                attendanceMap.set(op, new Array(numOfDays).fill(''))
            })

            // Set the attendance from the first section
            // Loop through each item in the array. ID is the date
            markAttendanceMap(attendanceMap, section1)
            markAttendanceMap(attendanceMap, section2)

            console.log(attendanceMap) 

            res.json({
                success: true,
                message: 'Successfully retrieved operators',
                data: Object.fromEntries(attendanceMap) 
            })
        } else {
            return res.json({
                success: false,
                message: 'No attendance records from selected month'
            })
        }

    } catch(err) {
        console.log(err)
        res.status(400).json({
            success: false,
            message: 'Something went wrong in querying from database',
            err,
        })
    }
}

module.exports = {getOperators}