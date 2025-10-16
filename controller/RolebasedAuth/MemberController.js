const { memberManagement } = require("../../model/RolebasedAuth/memberManagement");

const memberController = {
    residenceController:  (req, res) => {
        try {
            memberManagement.residenceManagement((err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send({ code: 500, message: err })
                }
                else {
                    return res.status(200).send({ message: result });
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    },
    ApproveController : (req,res)=>{
        try{
            memberManagement.Approve((err,result)=>{
                if(err){
                    return res.status(500).send({ code: 500, message: err })
                }else{
                    if(result){
                        return res.status(200).send({ code : 200 , message: "Member Approve succesfully" });
                    }
                }
            })
        }catch(err){
            console.log(err);
        }
    }

}
module.exports = {memberController}