const router = require("express").Router();
const { getData, insertData, updateData } = require("../../controllers/cards");
const fileUpload = require("../../lib/multer");
const { validateTasks } = require("../../middlewares/validate");
const checkToken = require("../../middlewares/checkToken");


router.get("/tasks", checkToken, getData);
router.post("/tasks", fileUpload().single("image"), validateTasks, insertData);
router.put("/tasks/:id", fileUpload().single("image"), validateTasks, updateData);

module.exports = router;