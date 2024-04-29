import API from "../api"
interface poolInput{
    pool_name:string
    pool_desc:string
    pool_target_amnt:string
    pool_extra_desc:string
}
export const addPool=async({pool_name, pool_desc, pool_target_amnt, pool_extra_desc}:poolInput)=>{
    const res=await API.post('/api/pools/new', {pool_name, pool_desc, pool_target_amnt, pool_extra_desc})
    return res.data
}

