// import AreaChartStats from "../../../components/charts/AreaChart";
// import DonutChartStats from "../../../components/charts/DonutChart";
// import DashboardStats from "../../components/common/DashboardStats";
// import Title, { Subtitle } from "../../../components/common/Title";
// import PersonalPoolData from "../../../components/portfolio/PersonalPoolCard";
// import { getCurrentUser } from "@/src/lib/session";

import PortfolioPage from "../portfolio";
import LandingLayout from "./layout";

const Portfolio = () => {
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
	
	// const user = await getCurrentUser();
	return (
		<LandingLayout>
		<div className="flex flex-col items-start w-full h-full p-6 overflow-y-auto">
			<div className="flex items-start flex-col w-full h-full justify-between gap-16">
				<div className="flex items-start justify-start w-full gap-2 flex-col mb-10">
					<h1 className="md:text-4xl">Welcome, </h1>
					<p>Your Investments</p>
				</div>
				<div className=" w-full">
					
					<PortfolioPage investments={investments} totalInvestment={totalInvestment} tokenBalance={tokenBalance}/>
				</div>
			</div>
		</div>
		</LandingLayout>
	);
};

export default Portfolio
