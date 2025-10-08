const conn = require("../../config/dbConfig");
const Usersignup = {
    getFlatcodebysocietyId : (sid,callback)=>{
        const sql = "SELECT fid , flat_code FROM Addflats WHERE sid = ?";
        conn.query(sql,[sid],callback)
    }
}
module.exports = {Usersignup}