const router = require("express").Router();
const { getData, registerData, loginData, logOut } = require("../../controllers/users");

router.get("/users", getData);
router.post("/register", registerData);
router.post("/login", loginData);
router.get("/logout", logOut)

module.exports = router;