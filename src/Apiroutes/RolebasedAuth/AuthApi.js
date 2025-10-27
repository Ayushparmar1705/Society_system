
const BASE_URL = "http://localhost:5000"
const ApiEndpoint = {
    
    MemberManagement: (society_name)=>`${BASE_URL}/auth/member/${society_name}`,
    Approve : `${BASE_URL}/auth/approve`,
    totalResidence : (id)=>`${BASE_URL}/auth/totalresidence/:${id}`,
    Addstaff : (id)=>`${BASE_URL}/auth/add-staff/${id}`,
    Managestaff : (id)=>`${BASE_URL}/auth/manage-staff/${id}`,
    InActivestaff : (id)=>`${BASE_URL}/auth/inactive-staff/${id}`,

}
export default ApiEndpoint