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

    societyDetails: async () => {
        try {
            const result = await fetch(ApiEndpoints.get_society);
            const dataResult = await result.json();
            return dataResult;
        }
        catch (error) {
            console.log(error);
        }
    },
    deleteSociety: async (id) => {
        console.log(id);
        try {

            const result = await fetch(ApiEndpoints.delete_society(id))
            const dataresult = await result.json();

            return dataresult;
        }
        catch (error) {
            console.log(error);
        }
    },
    searchSociety: async (name) => {
        try {
            
            const result = await fetch(ApiEndpoints.get_society_byname(name));
            const dataResult = await result.json();
            console.log(dataResult);
            return dataResult;
        }
        catch (error) {
            console.log(error);
        }
    },

    getSocietyById : async(id)=>{
        try{
            const result = await fetch(ApiEndpoints.search_by_id(id));
            const dataResult = await result.json();
            return dataResult;
        }
        catch(error){
            console.log(error);
        }
    }

}

export default ManageSociety;