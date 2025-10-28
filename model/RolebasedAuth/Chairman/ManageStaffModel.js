const conn = require("../../../config/dbConfig")
const Managestaffmodel = {
    Addstaff: (cid, data, callback) => {
        const sql = "INSERT INTO staff(cid , name , email , phone , role) VALUES(?,?,?,?,?)"
        conn.query(sql, [cid, data.name, data.email, data.phone, data.role], callback);
    },
    Managestaff: (id, callback) => {
        const sql = "SELECT * FROM staff WHERE cid = ?";
        conn.query(sql, [id], callback);
    },
    DeleteStaff: (id, callback) => {
        console.log(id)
        const sql = "UPDATE staff SET is_active = 0 WHERE sid = ?"
        conn.query(sql, [id], callback);
    },
    ActiveStaff: (id, callback) => {
        console.log(id)
        const sql = "UPDATE staff SET is_active = 1 WHERE sid = ?"
        conn.query(sql, [id], callback);
    },
    getOneStaff: (id, callback) => {
        const sql = "SELECT * FROM staff WHERE sid = ?";
        conn.query(sql, [id], callback);
    },
    updateStaff : (id , data , callback)=>{
        const sql = "UPDATE staff SET name = ? , email = ? , phone = ? , role = ? WHERE sid = ?";
        conn.query(sql,[data.name , data.email , data.phone , data.role , id],callback);
    }
}
module.exports = { Managestaffmodel }