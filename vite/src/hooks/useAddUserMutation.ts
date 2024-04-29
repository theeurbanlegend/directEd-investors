import {useMutation} from 'react-query'
import { addUser } from '../api/requests/postAddUser';
export const useAddUserMutation=()=>{
    return useMutation(({name, email, password}:{name:string, email:string, password:string}) => addUser({name, email,password}));
}

  