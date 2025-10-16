const conn = require("../../config/dbConfig");
const createConnection = require("../../config/MongoDbConfig");
const Userlogin = {
    login: (data, callback) => {
        const sql = "SELECT * FROM users WHERE email = ?";
        conn.query(sql, [data.email], callback);
    },
 
}

module.exports = {Userlogin}