const Joi = require('joi')

// @method:     POST
// @access:     Public
// @desc:       This will add a user to the DB
// @route:      /api/v1/user
function createUser(req, res) {

    // Validation Part
    let schema = Joi.object({
        firstName: Joi.string().required().messages({
            'string.empty': "First Name is required field"
        }),

        lastName: Joi.string().required().messages({
            'string.empty': "Last Name Name is required field"
        }),

        username: Joi
        .string()
        .min(7)
        .max(20)
        .required()
        .messages({
            'string.empty': "Username is required field",
            'string.min': "Username length must be at least 7 characters long"
        }),

        password: Joi
        .string()
        .alphanum()
        .pattern(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'))
        .min(8)
        .max(20)
        .required()
        .messages(
            {'string.empty': "Password is a required field",
            'string.pattern.base': "Password is must have at least one character and at least one number", 
            'string.min': "Password length must be at least 8 characters long" }),

        role: Joi.string().valid("MANAGER", "SUPERVISOR", "ADMINISTRATOR")
        .messages({'any.only': 'Role must be either Manager, Supervisor, or Administrator'})
    })

    // Destructure the contents of the body
    const {firstName, lastName, username, password, role} = req.body

    const {error, value} = schema.validate({firstName, lastName, username, password, role})
    console.log(`Validation result: ${value}`)
    if(error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
    res.status(200).json({
        success: true,
        msg: "Successfully created user"
    })
}

module.exports = {createUser}

/*
{
  firstName: 'Haron Paul',
  lastName: 'Lorente',
  username: 'yeahpoy',
  password: 'Hplorente26',
  role: 'SUPERVISOR'
}
*/