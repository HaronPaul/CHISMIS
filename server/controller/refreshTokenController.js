const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken = async (req,res) => {

    const cookies = req.cookies
    if(!cookies?.jwt)  return res.sendStatus(401) 

    const refreshToken = cookies.jwt
    try {
        // Match the enter password with the hashed password
        const foundUser = await User.findOne({refreshToken: refreshToken}, {username: 1, refreshToken: 1, role: 1})
        if(!foundUser) return res.sendStatus(403) // Forbidden

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if(err || foundUser.username !== decoded.userInfo.username) return res.sendStatus(403) 
                const accessToken = jwt.sign(
                    {
                        "userInfo" : {
                            "username": decoded.userInfo.username, 
                            "role": decoded.userInfo.role}
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn: '30s'}
                )
                res.json({accessToken: accessToken, role: foundUser.role})
            }
        )

    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
}

module.exports = {handleRefreshToken}  