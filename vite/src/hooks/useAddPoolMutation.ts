import {useMutation} from 'react-query'
import { addPool } from '../api/requests/addPool';
export const useAddUserMutation=()=>{
    return useMutation(({pool_name, pool_desc, pool_extra_desc, pool_target_amnt}:{pool_name:string, pool_desc:string, pool_extra_desc:string, pool_target_amnt:string}) => addPool({pool_name, pool_desc, pool_extra_desc, pool_target_amnt}));
}

  