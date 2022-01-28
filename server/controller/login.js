const User = require('../model/User')
const bcrypt = require('bcryptjs')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

let schema = Joi.object({
    username: Joi.string().required().messages({
        'string.empty': 'Username field is required'
    }),

    password: Joi.string().required().messages({
        'string.empty': 'Password field is required'
    })
})

// @route   POST api/v1/user/login
// @desc    Authenticate the user when logging in and get token
// @access  Public    
const login = async (req, res) => {
    const {username, password} = req.body

    // Validate the values in the fields
    const validationResult = schema.validate({username, password})
    if(validationResult.error) {
        return res.json({
            success: false,
            message: validationResult.error.details[0].message
        })
    }

    try {

        // Check if user exists
        const user = await User.findOne({username})
        if(!user) {
            return res.json({
                success: false,
                message: "Invalid username/password"
            })
        }

        // Check if passwords match
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid username/password"
            })
        }

        // Creating the payload for JWT
        const loggedInUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            role: user.role
        }
        
        jwt.sign(
            {loggedInUser},
            process.env.JWT_SECRET,
            {expiresIn: 10},
            (err, token) => {
                if(err) throw err
                res.json({
                    success: true,
                    user: {
                        ...loggedInUser,
                        token: token
                    }
                })
            }
        )
    } catch(error) {
        console.log(error)
        res.status(400).json({
            success: false,
            error
        })
    }
}
module.exports = login