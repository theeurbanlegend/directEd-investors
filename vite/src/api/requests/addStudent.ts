import API from "../api"
export interface studentInput extends FormData{
    name:string
    education:string
    careerGoals:string
    experience:string
    fundingNeed:string
    file?:File
}
export const addStudent=async(studentData:studentInput)=>{
    const res=await API.post('/api/students/new', studentData)
    return {data:res.data,status:res.status}
}
