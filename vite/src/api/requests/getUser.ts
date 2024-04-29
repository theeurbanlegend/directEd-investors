import API from "../api"
interface userInput{
    email:string
    password:string
}
export const getUser=async({email, password}:userInput)=>{
    const res=await API.post('/api/inv/login', {investor_email:email, password})
    return res.data
}