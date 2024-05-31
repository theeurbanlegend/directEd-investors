import { useEffect } from "react";
import Sidebar from "../SideBar";
import { useUserContext } from "../../context/userContext";


const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	const {getCurrentUser} = useUserContext();
	useEffect(() => {
		getCurrentUser();
		return () => getCurrentUser();
	  }, []);
	return (
		<main className="flex items-start h-screen w-full py-6 pr-4">
			<div className="h-full w-[250px]">
				<Sidebar />
			</div>
			<div className="h-full w-[100%] border rounded-lg bg-secondary overflow-auto">
				{children}
			</div>
		</main>
	);
};
export default LandingLayout;