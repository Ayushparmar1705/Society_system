const conn = require("../../../config/dbConfig")
const Dashboardmodel = {
    countTotalMembers: (callback) => {
        // count total residence
        const sql = "SELECT count(*) FROM users WHERE role = 'residence'"
        conn.query(sql,callback);
    }
}
module.exports = {Dashboardmodel}