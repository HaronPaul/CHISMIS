const jwt = require('jsonwebtoken')


// ---- Not yet done --------
module.exports = function(req,res,next) {
    // Get the token from the header
    const token = req.header('x-auth-token')

    // Check if no token
    if(!token) {
        return res.status(401).json({
            success: false,
            message: 'No token, authorization denied'
        })
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch(err) {
        res.status(401).json({message: 'Token is not valid'})
    }
    
    next()
}