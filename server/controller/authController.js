const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleLogin = async (req,res) => {
    console.log('In handle login')
    const {username, password} = req.body
    if(!username && !password) return res.status(400).json({'message': 'Username and password are required'})
    try {
        // Match the enter password with the hashed password
        const foundUser = await User.findOne({username}, {username: 1, password: 1, role: 1})
        if(!foundUser) return res.sendStatus(401)

        // When user is found, check if hashedPassword matches 
        const match = await bcrypt.compare(password, foundUser.password)
        if(match) {
            // Create tokens here and send
            const accessToken = jwt.sign(
                {
                "userInfo": {
                    "username": foundUser.username, 
                    "role": foundUser.role
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '30s'}
            )
            const refreshToken = jwt.sign(
                {"username": foundUser.username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: '1d'}
            )

            // Save the user's refresh token
            await User.updateOne({_id: foundUser._id}, {refreshToken: refreshToken})

            // Set refresh token in a cookie 
            res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000, sameSite: 'None', secure: true})
            res.json({accessToken, role: foundUser.role})
                
        }  else {
            res.sendStatus(401)
        }

    } catch(err) {
        res.sendStatus(500)
    }
}

module.exports = {handleLogin}  