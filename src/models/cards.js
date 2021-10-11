const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_TASKS = `
SELECT 
    *
FROM cards;
`;

exports.getTasks = () => fetchAll(SELECT_TASKS);