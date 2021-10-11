const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_USERS = `

`;

exports.getData = () => fetchAll(SELECT_USERS);