const router = require("express").Router();
const { getData, registerData, loginData, logOut } = require("../../controllers/users");
const { validateRegister, validateLogin } = require("../../middlewares/validate");

router.get("/users", getData);
router.post("/register", validateRegister, registerData);
router.post("/login", validateLogin, loginData);
router.get("/logout", logOut)

module.exports = router;