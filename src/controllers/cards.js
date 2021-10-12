const model = require("../models/cards");
const { verify } = require("../lib/jwt");
const { secretKey } = require("../config/keys");
const fs = require("fs");
const path = require("path");

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

exports.updateData = async (req, res) => {
    const fileName = await model.selectImage(req.params.id);
    fs.unlinkSync(path.join(process.cwd(), "src", "uploads", fileName.file));

    const data = await model.updateTask(req.params.id, req.body, req.file.filename);
    if(data) {
        res.status(200)
            .json({ message: "Task successfully updated!", id: data.id });
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.deleteData = async (req, res) => {
    const fileName = await model.selectImage(req.params.id);
    fs.unlinkSync(path.join(process.cwd(), "src", "uploads", fileName.file));

    const data = await model.deleteTask(req.params.id);
    if(data) {
        res.status(200)
            .json({ messsage: "Successfully deleted", id: data.id })
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.updateStatus = async (req, res) => {
    const data = await model.setStatus(req.params.id, req.body);
    if(data) {
        res.status(200)
            .json({ message: "Status successfully updated", id: data.id });
    } else {
        res.status(400)
            .json({ message: "There is an error, please try again!" });
    };
};

exports.filterData = async (req, res) => {
    const data = await model.filterTasks(req.body);
    if(data) {
        res.status(302)
            .send(data);
    } else {
        res.status(404)
            .json({ message: "Not found, please try again!" });
    };
};