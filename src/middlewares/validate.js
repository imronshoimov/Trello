const { registerSchema, loginSchema, tasksSchema } = require("../lib/joi");
const fs = require("fs");
const path = require("path");

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

exports.validateTasks = (req, res, next) => {
    const data = tasksSchema.validate(req.body);
    if(data.error) {
        if(req.file == undefined) {
            res.status(403)
                .json({ message: "image is required" });
        } else {
            fs.unlinkSync(path.join(process.cwd(), "src", "uploads", req.file.filename));
            res.status(403)
                .json({ message: data.error.details[0].message });
        }
    } else {
        next();
    };
};