const model = require("../models/cards");
const { verify } = require("../lib/jwt");

exports.getData = async (req, res) => {
    const data = await model.getTasks();
    if(data) {
        res.status(200)
            .send(data);
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.insertData = (req, res) => {
    console.log(req.body);
    // const data = await model.insertTasks();
}