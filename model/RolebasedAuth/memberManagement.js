const conn = require("../../config/dbConfig")
const memberManagement = {
    residenceManagement: (callback) => {
        const sql = "SELECT * FROM users s INNER JOIN Addflats af ON s.fid = af.fid  WHERE role = 'residence' "
        conn.query(sql, callback);

    },
    Approve: (callback) => {
        const sql = "UPDATE users SET user_status = true WHERE user_status = false"
        conn.query(sql, callback);
    },

}
module.exports = { memberManagement }