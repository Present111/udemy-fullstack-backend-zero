const express = require('express')
const path = require('path')
require('dotenv').config();//ket noi file .env
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
//console.log('>>> check env', process.env);

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//const host=process.env.DB_HOST;

//config template engine
configViewEngine(app);
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
//khai bao route
app.use('/', webRoutes);


// A simple SELECT query
// connection.query(
//     'SELECT * FROM Users u',
//     function (err, results, fields) {
//         console.log(">>>results= ", results); // results contains rows returned by server
//     }
// );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

