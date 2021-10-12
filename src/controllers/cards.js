const model = require("../models/cards");
const { verify } = require("../lib/jwt");
const { secretKey } = require("../config/keys");

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

exports.insertData = async (req, res) => {
    const { id } = verify(req.headers.authorization, secretKey);
    const data = await model.insertTasks(id, req.body, req.file.filename);
    if(data) {
        res.status(201)
            .json({ message: "Task successfully created", id: data.id });
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};