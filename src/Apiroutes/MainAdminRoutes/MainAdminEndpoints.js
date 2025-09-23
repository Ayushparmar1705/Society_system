const BASE_URL = "http://localhost:5000";
const ApiEndpoints = {
    "add_society" : `${BASE_URL}/mainadmin/addsociety`,
    "get_society" : `${BASE_URL}/mainadmin/getsociety`,
    "delete_society" : (id) => `${BASE_URL}/mainadmin/deletesociety/${id}`,
    "get_society_byname" : (name) => `${BASE_URL}/mainadmin/searchsociety/${name}`,
    "search_by_id" : (id)=> `${BASE_URL}/mainadmin/searchbyid/${id}`,
    "add_block" : `${BASE_URL}/mainadmin/addblock`,
    "get_society_name" : `${BASE_URL}/mainadmin/getsocietyname`,
}
export default ApiEndpoints;