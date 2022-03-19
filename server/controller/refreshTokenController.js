const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken = async (req,res) => {

    const cookies = req.cookies
    if(!cookies?.jwt)  return res.sendStatus(401) 

    console.log(cookies.jwt);
    const refreshToken = cookies.jwt
    try {
        // Match the enter password with the hashed password
        const foundUser = await User.findOne({refreshToken: refreshToken}, {username: 1, refreshToken: 1})
        if(!foundUser) return res.sendStatus(403) // Forbidden

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if(err || foundUser.username !== decoded.username) return res.sendStatus(403) 
                const accessToken = jwt.sign(
                    {
                        "userInfo" : {
                            "username": decoded.username, 
                            "role": decoded.role,}
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn: '30s'}
                )
                res.json({accessToken})
            }
        )

    } catch(err) {
        res.sendStatus(500)
    }
}

module.exports = {handleRefreshToken}  