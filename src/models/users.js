const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_USERS = `SELECT 
    id,
    name,
    email,
    user_name
FROM users;`;

const REGISTER_USER = `
INSERT INTO users(
    name,
    email,
    user_name,
    password
) VALUES ( $1, $2, $3, crypt($4, gen_salt('bf')) )
RETURNING id;
`;

const LOGIN_USER = `
SELECT 
    u.id
FROM users u
WHERE u.user_name = $1 AND
u.password = crypt($2, u.password);
`;

exports.getData = () => fetchAll(SELECT_USERS);
exports.registerUser = (data) => fetch(REGISTER_USER, data.name, data.email, data.userName, data.password);
exports.loginUser = (data) => fetch(LOGIN_USER, data.userName, data.password);