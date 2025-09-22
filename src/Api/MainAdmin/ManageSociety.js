import ApiEndpoints from "../../Apiroutes/MainAdminRoutes/MainAdminEndpoints";
const ManageSociety = {
    addSociety: async (data) => {
        try {
            const result = await fetch(ApiEndpoints.add_society, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const dataResult = await result.json();
            return dataResult;
        }
        catch (error) {
            console.error(error);
        }
    },

    societyDetails : async()=>{
        try{
            const result = await fetch(ApiEndpoints.get_society);
            const dataResult = await result.json();
            return dataResult;
        }
        catch(error){
            console.log(error);
        }
    }

}

export default ManageSociety;