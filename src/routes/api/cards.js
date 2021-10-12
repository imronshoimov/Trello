const router = require("express").Router();
const { getData, insertData } = require("../../controllers/cards");
const fileUpload = require("../../lib/multer");
const { validateTasks } = require("../../middlewares/validate");
const checkToken = require("../../middlewares/checkToken");


router.get("/tasks", checkToken, getData);
router.post("/tasks", fileUpload().single("image"), validateTasks, insertData);

module.exports = router;