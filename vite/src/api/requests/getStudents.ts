import API from "../api"

export const getStudents=async()=>{
    const res=await API.post('/api/students')
    return res.data
}