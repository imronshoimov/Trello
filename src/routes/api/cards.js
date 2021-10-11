const router = require("express").Router();
const { getData, insertData } = require("../../controllers/cards");

router.get("/tasks", getData);
router.post("/tasks/:id", insertData);

module.exports = router;