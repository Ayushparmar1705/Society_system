import ApiEndpoint from "../../Apiroutes/RolebasedAuth/AuthApi";

export const Membermanagement = {
    allMembers: async () => {
        const data = await fetch(ApiEndpoint.MemberManagement);
        const result = await data.json();
        return result.message
    },
    approveMembers: async () => {
        const data = await fetch(ApiEndpoint.Approve)
        const result = await data.json();
        return result;
    }
}

