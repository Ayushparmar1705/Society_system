const BASE_URL = "http://localhost:5000";
const ApiEndpoints = {
    "get_flats": `${BASE_URL}/mainadmin/getsocietyname`,
    "getblockbyflatsname": (id) => `${BASE_URL}/users/getflatcodebysocietyid/${id}`,

}
export default ApiEndpoints;