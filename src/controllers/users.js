const model = require("../models/users");
const { sign } = require("../lib/jwt");
const {  maxAge } = require("../config/keys");

exports.getData = async (req, res) => {
    const data = await model.getData();
    if(data) {
        res.status()
            .send(data)
            .json({ message: "" });
    } else {
        res.status()
            .json({ message: "" });
    };
};

exports.registerData = async (req, res) => {
    const data = await model.registeruser(req.body);
    if(data) {
        res.cookie("token", sign(data.id), { maxAge })
            .status()
            .json({ message: "", id: data.id });
    } else {
        res.status()
            .json({ message: "" });
    };
};

exports.loginData = async (req, res) => {
    const data = await model.loginUser(req.body);
    if(data) {
        res.cookie("token", sign(data.id), { maxAge })
            .status()
            .json({ message: "", id: data.id });
    } else {
        res.status()
            .json({ message: "" });
    };
};

exports.logOut = (req, res) => {
    res.clearCookie('token')
        .status(200)
        .json({ message: "Successfully, logged out" });
};