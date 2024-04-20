import  axios  from "axios";
const getapi =()=>{
    return axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res)=>{
       return res.data.data
        })
}
export const apiReducer=async(state,action)=>{
    switch (action.type) {
        case "GET":
            state = await getapi()
           return [...state]

        case "ADD":
           return axios.post("https://student-api.mycodelibraries.com/api/user/add",action.data).then((res)=>{
                return getapi()
            })

        case "DELETE":
           return axios.delete("https://student-api.mycodelibraries.com/api/user/delete?id="+action.id).then((res)=>{
                return getapi()
            })

        case "EDIT":
           return axios.post("https://student-api.mycodelibraries.com/api/user/update",action.obj).then((res)=>{
                return getapi()
            })
    
        default:
            return state;
    }
} 