const model = require("../models/users");

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

exports.registerUser = (req, res) => {

};

exports.loginUser = (req, res) => {

};