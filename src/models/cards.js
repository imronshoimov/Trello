const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_TASKS = `
SELECT 
    *
FROM cards;
`;

const INSERT_TASKS = `
INSERT INTO cards(
    user_id,
    task,
    description,
    sub_task,
    file
) VALUES ( $1, $2, $3, $4, $5 )
RETURNING id;
`;

exports.getTasks = () => fetchAll(SELECT_TASKS);
exports.insertTasks = (id, data, image) => fetch(
    INSERT_TASKS, 
    id, 
    data.task, 
    data.description, 
    data.subTask,
    image
);