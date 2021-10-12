const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_TASKS = `
SELECT 
    *
FROM cards;
`;

const INSERT_TASKS = `
INSER INTO cards(
    user_id,
    description,
    task,
    file
    sub_task,
) VALUES ( $1, $2, $3, $4, $5 )
`

exports.getTasks = () => fetchAll(SELECT_TASKS);
exports.insertTasks = (id, data, image) => fetch(
    INSERT_TASKS, 
    id, 
    data.description, 
    data.task, 
    image, 
    data.subTask
);