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
    file,
    task_status
) VALUES ( $1, $2, $3, $4, $5, $6 )
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
    file = $4,
    task_status = $5
WHERE id = $6
RETURNING id;
`;

const DELETE_TASK = `
DELETE FROM cards
WHERE id = $1
RETURNING id;
`;

const UPDATE_STATUS = `
UPDATE cards
SET status = $1
WHERE id = $2
RETURNING id;
`;

const FILTER_TASKS = `
SELECT
    u.name,
    c.task,
    c.description,
    c.sub_task,
    c.file,
    c.status,
    c.task_status,
    TO_CHAR(c.time, 'yyyy-MM-dd HH24:MI:SS') as time 
FROM cards c 
RIGHT JOIN users u ON u.id = c.user_id
WHERE u.user_name ILIKE '%' || $1 || '%' OR
u.email ILIKE '%' || $1 || '%' OR
c.task ILIKE '%' || $1 || '%' OR
c.time ILIKE '%' || $1 || '%' OR
c.task_status ILIKE '%' || $1 || '%';
`;

exports.getTasks = () => fetchAll(SELECT_TASKS);

exports.insertTasks = (id, data, image) => fetch(
    INSERT_TASKS, 
    id, 
    data.task, 
    data.description, 
    data.subTask,
    image,
    data.taskStatus
);

exports.selectImage = (id) => fetch(SELECT_IMAGE, id);

exports.updateTask = (id, data, image) => fetch(
    UPDATE_TASK, 
    data.task, 
    data.description, 
    data.subTask, 
    image,
    data.taskStatus, 
    id
);

exports.deleteTask = (id) => fetch(DELETE_TASK, id);

exports.setStatus = (id, { status }) => fetch(UPDATE_STATUS, status, id);

exports.filterTasks = ({ filter }) => fetch(FILTER_TASKS, filter);