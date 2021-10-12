const router = require("express").Router();
const { getData, insertData } = require("../../controllers/cards");
const fileUpload = require("../../lib/multer");

router.get("/tasks", getData);
router.post("/tasks", fileUpload().single("image"), insertData);

module.exports = router;