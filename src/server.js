require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookie = require("cookie-parser");
const { PORT } = require("./config/keys");
const routes = require("./routes");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.use(express.static(path.join(__dirname, "uploads")));
app.use(cookie());

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});