import { useQuery } from "react-query";
import { getInvestorDetails } from "../api/requests/getInvestorDetails";

export const useGetInvestorDetailsQuery= (id: string) => {
  const {data, isLoading, isError, refetch} = useQuery({
    queryFn: async () => getInvestorDetails({id}),
    enabled: !!id,
    queryKey: ['investor', id]
  });
    return {investor: data, isLoadingInvestor: isLoading, isErrorInvestor: isError, refetchInvestor: refetch};
}