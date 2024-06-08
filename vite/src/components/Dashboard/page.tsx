import { useEffect } from "react";
import DashboardStats from "../../common/DashboardState";
import { useUserContext } from "../../context/userContext";
import LandingLayout from "../portfolio/layout";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
	
	const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

	const { setName, setEmail, setProfile, name, getCurrentUser } = useUserContext();
    // const {getCurrentUser}=useUserContext()

	useEffect(() => {
        const name = queryParams.get('name');
        const email = queryParams.get('email');
        const picture = queryParams.get('picture');

        if (name && email && picture) {
            setName(name);
            setEmail(email);
            setProfile({ url: picture });
        }
    }, [queryParams, setName, setEmail, setProfile]);

useEffect(()=>{
		getCurrentUser()
	}, [])
	return (
        <LandingLayout>
		<div className="flex flex-col items-start w-full h-full p-6 overflow-y-auto bg-[#F1F5F9]">
			<div className="flex items-start flex-col gap-6 w-full h-full">
				<div className="flex items-start justify-start w-full gap-2 flex-col">
					<h1 className="md:text-4xl">Welcome, {name}</h1>
					<h2>
						Don't forget to check out our latest investment opportunities! 
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
