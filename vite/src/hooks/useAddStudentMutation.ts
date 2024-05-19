import {useMutation} from 'react-query'
import { addStudent, studentInput } from '../api/requests/addStudent';
export const useAddStudentMutation=()=>{
    return useMutation(({studentInput}:{studentInput:studentInput}) => addStudent(studentInput));
}

  