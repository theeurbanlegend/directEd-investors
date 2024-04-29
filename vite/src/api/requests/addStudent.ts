import API from "../api"
interface studentInput{
    student_name:string
    education:string
    careerGoals:string
    fundingNeed:string
}
export const addStudent=async({student_name, education, careerGoals, fundingNeed}:studentInput)=>{
    const res=await API.post('/api/students/new', {student_name, education, careerGoals, fundingNeed})
    return res.data
}
