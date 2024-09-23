const connection = require('../config/database')

const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getPresent111 = (req, res) => {
    //res.send('<h1>Present111</h1>')
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, // Add a comma after this line
    //     [email, name, city],
    //     function (err, results) {
    //         if (err) {
    //             console.error(err);
    //             return res.status(500).send('An error occurred while creating the user');
    //         }
    //         console.log(results);
    //         res.send('User created successfully');
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, // Add a comma after this line
        [email, name, city],
    );

    console.log(">>>check results: ", results);
    res.send('User created successfully');

    //console.log(email, name, city);

    // const [results, fields] = await connection.query('select * from Users u');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getPresent111,
    postCreateUser,
    getCreatePage
}