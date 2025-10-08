const { Usersignup } = require("../../model/User/Signup");

const SignupController = {
    getFlatsCodeBySocietyId : (req,res)=>{
        const id = req.params.id;
        Usersignup.getFlatcodebysocietyId(id,(err,result)=>{
            if(err){
                return res.status(500).send({code : 500 , message : err});
            }
            else{
                return res.status(200).send({code : 200 , message : result})
            }
        })
    }
}

module.exports = {SignupController}