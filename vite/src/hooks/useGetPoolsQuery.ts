import {useQuery} from 'react-query'
import { getPools } from '../api/requests/getPools';
export const useGetPoolsQuery=()=>{
    const {data, isLoading, isSuccess}=useQuery({
        queryFn:async()=>getPools(),
        queryKey:'pools'
    })
    return {pools:data, isLoadingPools:isLoading, isSuccessPools:isSuccess}
}

  