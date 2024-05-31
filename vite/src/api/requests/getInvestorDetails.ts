import API from "../api"

export const getInvestorDetails=async ({id}:{id:string})=>{
    const res=await API.get(`/api/inv/${id}`)
    return res.data
}