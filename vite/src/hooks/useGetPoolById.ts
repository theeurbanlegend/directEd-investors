import {useQuery} from 'react-query'
import { getPool } from '../api/requests/getPoolById';
export const useGetPoolQuery=({id}:{id:string})=>{
    const {data, isLoading, isSuccess }=useQuery({
        queryFn:async()=>getPool({id})
    })
    return {pool:data, isLoadingPool:isLoading, isSuccessPool:isSuccess}
}

  