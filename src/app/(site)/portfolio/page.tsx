import AreaChartStats from "@/src/components/charts/AreaChart";
import DonutChartStats from "@/src/components/charts/DonutChart";
import DashboardStats from "@/src/components/common/DashboardStats";
import Title, { Subtitle } from "@/src/components/common/Title";
import PersonalPoolData from "@/src/components/portfolio/PersonalPoolData";
import { getCurrentUser } from "@/src/lib/session";

const Dashboard = async () => {
	const user = await getCurrentUser();
	return (
		<div className="flex flex-col items-start w-full h-full p-6 overflow-y-auto">
			<div className="flex items-start flex-col gap-6 w-full h-full">
				<div className="flex items-start justify-start w-full gap-2 flex-col">
					<Title className="md:text-4xl">Welcome, {user?.name}</Title>
					
				</div>
				<div className="flex flex-col items-start w-full gap-4">
					<DashboardStats />
					<p>Your Investments</p>
					<PersonalPoolData/>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
