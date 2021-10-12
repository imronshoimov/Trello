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

const SELECT_IMAGE = `
SELECT 
    file
FROM cards
WHERE id = $1;
`;

const UPDATE_TASK = `
UPDATE cards
SET task = $1,
    description = $2,
    sub_task = $3,
    file = $4
WHERE id = $5
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
exports.selectImage = (id) => fetch(SELECT_IMAGE, id);
exports.updateTask = (id, data, image) => fetch(
    UPDATE_TASK, 
    data.task, 
    data.description, 
    data.subTask, 
    image, 
    id
);