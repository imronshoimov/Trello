const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/api", (req, res) => res.status(404).json( { message: "No API route found" } ));

module.exports = router;