import API from "../api"

export const getStudents=async()=>{
    const res=await API.get('/api/students')
    return res.data
}