import { useEffect, useState } from "react";
import { useGetPoolsQuery } from "../../hooks/useGetPoolsQuery";
import LandingLayout from "../portfolio/layout";
import Cards from "./card/poolCard";
import PoolCardsLoader from "./card/poolCardLoader";
import { useGetInvestorDetailsQuery } from "../../hooks/useGetInvestorDetails";
import { useUserContext } from "../../context/userContext";

const Pools = () => {
  const [pools, setPools] = useState<any[] | null>(null);
  const { pools:loadedPools, isLoadingPools } = useGetPoolsQuery();
  //get investor details
  const { id } = useUserContext();
  const { investor, isErrorInvestor, isLoadingInvestor } =  useGetInvestorDetailsQuery(id as string);
  useEffect(() => {
    if (!id) return;
    const fetchInvestorDetails = async () => {
      try {
        if (investor && loadedPools && !isLoadingInvestor && !isErrorInvestor) {
          const { inv } = investor;
          const poolsInvested = inv.pools_invested;
          //add a isInvested property to the pool object
          const pools = loadedPools.map((pool:any) => {
            const isInvested = poolsInvested.some(
              (poolInvested:any) => poolInvested.pool_id?._id.toString() === pool._id.toString()
            );
            return {
              ...pool,
              isInvested,
            };
          });
          setPools(pools);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchInvestorDetails();
  }, [id, investor]);
  return (
    <LandingLayout>
      <div className="p-10">
        <section className="my-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Explore Investment Opportunities
          </h2>
          <p className="text-lg mb-4">
            Discover exciting investment opportunities in Web Development, UI/UX
            Design, and Generative AI. Each of these sectors presents unique
            potential for growth and innovation in today's market. Whether
            you're passionate about building the web, crafting intuitive user
            experiences, or exploring the creative potential of AI, there's an
            investment path waiting for you.
          </p>
        </section>
        {
          isLoadingPools ? (
            <div className="mx-auto p-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-screen-lg mx-auto">
                <PoolCardsLoader />
              </div>
            </div>
          ) :
        pools && pools.length > 0 ? (
          <div className="mx-auto p-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-screen-lg mx-auto">
              {pools.map((pool:any) => (
                <Cards pool={pool} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-2xl font-bold">
            No Pools Available
          </div>
        )}
      </div>
    </LandingLayout>
  );
};

export default Pools;
