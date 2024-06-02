import API from "../api"

export const getPools=async()=>{
    const res=await API.get('/api/pools')
    return res.data
}