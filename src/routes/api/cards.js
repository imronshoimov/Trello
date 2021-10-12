const router = require("express").Router();
const { getData, insertData } = require("../../controllers/cards");
const fileUpload = require("../../lib/multer");
const { validateTasks } = require("../../middlewares/validate");

router.get("/tasks", getData);
router.post("/tasks", fileUpload().single("image"), validateTasks, insertData);

module.exports = router;