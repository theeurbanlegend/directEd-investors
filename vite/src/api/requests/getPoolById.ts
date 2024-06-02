import API from "../api"

export const getPool=async({id}:{id:string})=>{
    const res=await API.get(`/api/pools/${id}`)
    return res.data
}