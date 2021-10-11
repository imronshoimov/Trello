const { registerSchema, loginSchema } = require("../lib/joi");

exports.validateRegister = (req, res, next) => {
    const data = registerSchema.validate(req.body);
    if(data.error) {
        res.status(403)
            .json({ message: data.error.details[0].message });
    } else {
        next();
    };
}

exports.validateLogin = (req, res, next) => {
    const data = loginSchema.validate(req.body);
    if(data.error) {
        res.status(403)
            .json({ message: data.error.details[0].message });
    } else {
        next();
    };
}