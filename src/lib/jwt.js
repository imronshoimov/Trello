const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/keys");

module.exports = {
    sign: payload => jwt.sign(payload, secretKey, { expiresIn: "24h" }),
    verify: token => jwt.verify(token, secretKey)
};