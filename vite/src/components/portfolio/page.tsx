import { useEffect, useState } from "react";
import { useUserContext } from "../../context/userContext";
import PortfolioPage from "./portfolio";
import LandingLayout from "./layout";
import { useGetInvestorDetailsQuery } from "../../hooks/useGetInvestorDetails";
import PortfolioLoader from "./PortfolioLoader";

const Portfolio = () => {
  const [investments, setInvestments] = useState(null);
  const { id, name } = useUserContext();
  const { investor, isErrorInvestor, isLoadingInvestor } =  useGetInvestorDetailsQuery(id as any);

  useEffect(() => {
    if (!id) return;
    const fetchInvestorDetails = async () => {
      try {
        if (investor && !isLoadingInvestor && !isErrorInvestor) {
          const { inv } = investor;
          const investmentsResponse = inv.investments as any[];
          const poolsInvested = inv.pools_invested as any[];
          const investments = investmentsResponse.map((investment) => {
            const pool = poolsInvested.find(
              (pool) => pool.pool_id?._id.toString() === investment.pool_invested.toString()
            );
            return {
              pool: pool.pool_id.pool_name,
              amount: investment.tokens_invested,
              tokensEarned: investment.tokens_invested,
              status: investment.investment_status,
              returns: investment.potential_returns,
            };
          });
          setInvestments(investments as any);
          
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchInvestorDetails();
  }, [id, investor]);

  const totalInvestment = 2250;
  const tokenBalance = 1250;

  return (
    <LandingLayout>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center w-full max-w-screen-lg p-6 overflow-y-auto">
          <div className="flex items-center justify-center flex-col mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
              Welcome, {name}!
            </h1>
            <p className="text-lg text-center font-bold">Your Investments</p>
            {/* Additional personalized content here */}
          </div>
          <div className="w-full">
            {isLoadingInvestor && 
              <div>
                <PortfolioLoader />
              </div>
            }
            {isErrorInvestor && <p className="text-center">Error fetching investments</p>}
            {investments && (
              <PortfolioPage
                investments={investments!}
                totalInvestment={totalInvestment}
                tokenBalance={tokenBalance}
              />
            )}
            {/* Additional investment insights or visualizations */}
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Portfolio;
