import API from "../api"

export const getPools=async()=>{
    const res=await API.post('/api/pools')
    return res.data
}