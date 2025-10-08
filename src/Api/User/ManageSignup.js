import ApiEndpoints from "../../Apiroutes/UserRoutes/UserEndpoints"

const Managesignup = {
    getSociety : async()=>{
        const data = await fetch(ApiEndpoints.get_flats)
        const result = await data.json();

        return result;
    },
    getFlatsCode : async(society_id)=>{
        const data = await fetch(ApiEndpoints.getblockbyflatsname(society_id));
        const result = await data.json();
        return result;
    },
  

}
export default Managesignup;