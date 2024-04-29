import {useMutation} from 'react-query'
import { addStudent } from '../api/requests/addStudent';
export const useAddStudentMutation=()=>{
    return useMutation(({student_name, careerGoals, education, fundingNeed}:{student_name:string, education:string, careerGoals:string, fundingNeed:string}) => addStudent({student_name, careerGoals, education, fundingNeed}));
}

  