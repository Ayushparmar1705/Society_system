const conn = require("../../config/dbConfig");
const createConnection = require("../../config/MongoDbConfig");
const Userlogin = {
    login: (data, callback) => {
     
        const sql = "SELECT * FROM users u INNER JOIN Addsociety asco ON u.sid = asco.sid WHERE u.email = ? and user_status = 1";
        conn.query(sql, [data], callback);
    },
 
}

module.exports = {Userlogin}