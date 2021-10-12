const model = require("../models/users");
const { sign } = require("../lib/jwt");
const { maxAge } = require("../config/keys");

exports.getData = async (req, res) => {
    const data = await model.getData();
    if(data) {
        res.status(200)
            .send(data);
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.registerData = async (req, res) => {
    const data = await model.registerUser(req.body);
    if(data) {
        const token = sign(data);
        res.status(201)
            .json({ message: "You successfully registered", token, id: data.id });
    } else {
        res.status(401)
            .json({ message: "Bad request, please try again!" });
    };
};

exports.loginData = async (req, res) => {
    const data = await model.loginUser(req.body);
    if(data) {
        const token = sign(data);
        res.status(302)
            .json({ message: "You successfully logged in", token, id: data.id });
    } else {
        res.status(404)
            .json({ message: "Username or password is incorrect!" });
    };
};

exports.logOut = (req, res) => {
    res.clearCookie('token')
        .status(200)
        .json({ message: "Successfully, logged out" });
};