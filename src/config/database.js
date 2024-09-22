const mysql = require('mysql2');
require('dotenv').config();
//test connection
//create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_name,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD
});

module.exports = connection;