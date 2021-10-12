const router = require("express").Router();
const { 
    getData, 
    insertData, 
    updateData, 
    deleteData, 
    updateStatus, 
    filterData 
} = require("../../controllers/cards");
const fileUpload = require("../../lib/multer");
const { validateTasks } = require("../../middlewares/validate");
const checkToken = require("../../middlewares/checkToken");


router.get("/tasks", checkToken, getData);
router.post("/tasks", fileUpload().single("image"), validateTasks, insertData);
router.put("/tasks/:id", fileUpload().single("image"), validateTasks, updateData);
router.delete("/tasks/:id", deleteData);
router.patch("/tasks/status/:id", updateStatus);
router.get("/tasks/filter", filterData)

module.exports = router;