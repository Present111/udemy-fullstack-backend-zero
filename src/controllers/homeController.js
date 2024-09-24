const connection = require('../config/database')
const { getAllUsers, updateUserById } = require('../services/CRUDServices')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })// x<-y
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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    let [results, fields] = await connection.query('select * from Users where id= ?', [userId])
    console.log(">>>check results: ", results);

    let user = results && results.length > 0 ? results[0] : {}

    res.render('edit.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {
    try {
        let email = req.body.email;
        let name = req.body.myname;
        let city = req.body.city;
        let userId = req.body.id;

        console.log('userid= ', userId);

        // Kiểm tra nếu userId không hợp lệ
        if (!userId) {
            return res.status(400).send('Invalid userId');
        }

        // Cập nhật dữ liệu người dùng
        await updateUserById(email, city, name, userId);

        //res.send('User updated successfully');
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while updating the user');
    }
};

module.exports = {
    getHomepage,
    getABC,
    getPresent111,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}