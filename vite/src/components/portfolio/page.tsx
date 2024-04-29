import { useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import PortfolioPage from "../portfolio";
import LandingLayout from "./layout";

const Portfolio = () => {
	const {name, getCurrentUser}=useUserContext()
	
	useEffect(()=>{
		getCurrentUser()
	}, [])

  const investments = [
    {
      pool: "Pool A",
      amount: 1000,
      tokensEarned: 500,
      status: "Active",
      returns: "10%"
    },
    {
      pool: "Pool B",
      amount: 2000,
      tokensEarned: 1000,
      status: "Completed",
      returns: "20%"
    },
    {
      pool: "Pool C",
      amount: 1500,
      tokensEarned: 750,
      status: "Active",
      returns: "15%"
    }
  ];

  const totalInvestment = investments.reduce((total, investment) => total + investment.amount, 0);
  const tokenBalance = investments.reduce((totalTokens, investment) => totalTokens + investment.tokensEarned, 0);

  return (
    <LandingLayout>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center w-full max-w-screen-lg p-6 overflow-y-auto">
          <div className="flex items-center justify-center flex-col mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">Welcome, {name}!</h1>
            <p className="text-lg text-center font-bold">Your Investments</p>
            {/* Additional personalized content here */}
          </div>
          <div className="w-full">
            <PortfolioPage
              investments={investments}
              totalInvestment={totalInvestment}
              tokenBalance={tokenBalance}
            />
            {/* Additional investment insights or visualizations */}
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Portfolio;
