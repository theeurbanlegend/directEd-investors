import API from "../api"
interface userInput{
    name:string
    email:string
    password:string
}
export const addUser=async({name, email, password}:userInput)=>{
    const res=await API.post('/api/inv/signup', {investor_name:name, investor_email:email, password})
    return res.data
}