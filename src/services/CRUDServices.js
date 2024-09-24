const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}

const updateUserById = async (email, city, name, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
         SET email = ?, city = ?, name = ?
         WHERE id = ?`,
        [email, city, name, userId]
    );
}

module.exports = {
    getAllUsers,
    updateUserById,
}