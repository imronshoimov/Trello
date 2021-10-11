const router = require("express").Router();
const { getData, registerUser, loginUser } = require("../../controllers/users");

router.get("/users", getData);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;