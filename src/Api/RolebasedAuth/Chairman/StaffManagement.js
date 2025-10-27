import ApiEndpoint from "../../../Apiroutes/RolebasedAuth/AuthApi";

export  const  StaffManagement = {
    Addstaff : async(securityData , id)=>{
        const data = await fetch(ApiEndpoint.Addstaff(id),{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(securityData)
        });
        const result = await data.json();
        return result;
    },
    Managestaff : async(id)=>{
        const data = await fetch(ApiEndpoint.Managestaff(id))
        const result = await data.json();
        return result;
    },
    InActivestaff : async(id)=>{
        const data = await fetch(ApiEndpoint.InActivestaff(id),{
            method : "DELETE",
        });
        const result = await data.json();
        return result;
    }
}
