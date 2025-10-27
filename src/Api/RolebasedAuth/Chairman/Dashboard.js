import ApiEndpoint from "../../../Apiroutes/RolebasedAuth/AuthApi"

const DashboardManagement = {
    countResidence: async () => {
        const data = await fetch(ApiEndpoint.totalResidence)
        const result = await data.json();
        console.log(result)
        return result;
    }
}
export default DashboardManagement