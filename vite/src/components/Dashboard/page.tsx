import DashboardStats from "../../common/DashboardState";
import LandingLayout from "../portfolio/layout";

const Dashboard = () => {
	const user = 'Raymond'
    //  await getCurrentUser()
     ;
	return (
        <LandingLayout>
		<div className="flex flex-col items-start w-full h-full p-6 overflow-y-auto bg-[#F1F5F9]">
			<div className="flex items-start flex-col gap-6 w-full h-full">
				<div className="flex items-start justify-start w-full gap-2 flex-col">
					<h1 className="md:text-4xl">Welcome, {user}</h1>
					<h2>
						Have a nice day, and don't forget to drink water! 🥤
					</h2>
				</div>
				<div className="flex flex-col items-start w-full gap-4">
					<DashboardStats />
					<div className="flex items-start w-full gap-4 lg:flex-row flex-col">
					</div>
				</div>
			</div>
		</div>            
        </LandingLayout>

	);
};

export default Dashboard;
