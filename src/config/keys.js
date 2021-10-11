module.exports = {
    PORT: process.env.PORT,
    connectionString: process.env.DB_CONNNECT,
    secretKey: process.env.SECRET_KEY,
    maxAge: 24*60*60*1000
}