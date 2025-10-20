const conn = require("../../../config/dbConfig")
const memberManagement = {
    // write the query to manage the all the members
    residenceManagement: (society_name, callback) => {

        const sql = "select s.uid , s.sid , s.fid , s.username , s.email , s.phone , s.role , af.floor_number , af.flat_code , ass.society_name , s.user_status from users s inner join Addflats af on s.fid = af.fid inner join Addsociety ass on s.sid = ass.sid WHERE ass.society_name = ? AND role = 'residence';"
        conn.query(sql, [society_name], callback);

    },
    // write the query to approve the member
    Approve: (callback) => {
        const sql = "UPDATE users SET user_status = true WHERE user_status = false"
        conn.query(sql, callback);
    },

}
module.exports = { memberManagement }