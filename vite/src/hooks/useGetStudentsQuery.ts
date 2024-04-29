import {useQuery} from 'react-query'
import { getStudents } from '../api/requests/getStudents'
export const useGetStudentsQuery=()=>{
    const {data, isLoading}=useQuery({
        queryFn:async()=>getStudents()
    })
    return {students:data, isLoadingStudents:isLoading}
}

  