import {useMutation} from 'react-query'
import { getUser } from '../api/requests/getUser'
export const useGetUserMutation=()=>{
    return useMutation(({email, password}:{email:string, password:string}) => getUser({email,password}));
}

  