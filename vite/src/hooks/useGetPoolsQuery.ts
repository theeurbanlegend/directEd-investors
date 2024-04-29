import {useQuery} from 'react-query'
import { getPools } from '../api/requests/getPools';
export const useGetPoolsQuery=()=>{
    const {data, isLoading}=useQuery({
        queryFn:async()=>getPools()
    })
    return {pools:data, isLoadingPools:isLoading}
}

  