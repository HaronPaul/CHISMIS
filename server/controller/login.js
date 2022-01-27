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
    try {
        // Validate the values in the fields
        await schema.validateAsync({username, password})

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
            return res.json({
                success: false,
                message: "Invalid username/password"
            })
        }

        // Creating the payload for JWT
        const payload = {
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                role: user.role
            }
        }
        
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn: 36000},
            (err, token) => {
                if(err) throw err
                res.json({
                    success: true,
                    token: token
                })
            }
        )
    } catch(error) {
        res.json({
            success: false,
            message: error.details[0].message || error
        })
    }
}
module.exports = login