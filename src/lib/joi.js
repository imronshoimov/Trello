const Joi = require("joi");

exports.registerSchema = Joi.object({
    name: Joi.string().not(""),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ru'] } }),
    userName: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

exports.loginSchema = Joi.object({
    userName: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

exports.tasksSchema = Joi.object({
    task: Joi.string().alphanum().min(3).max(20).required().not(""), 
    description: Joi.string().alphanum().min(3), 
    subTask: Joi.string().alphanum().min(3),
    taskStatus: Joi.string()
});