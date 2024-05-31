import {
	DashboardIcon,
	EnvelopeClosedIcon,
	GearIcon,
	LightningBoltIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import { Link, useLocation }from "react-router-dom";

const TopLinks = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: <DashboardIcon />,
	},
	{
		title: "Portfolio",
		href: "/portfolio",
		icon: <DashboardIcon />,
	},
	{
		title: "Pools",
		href: "/pools",
		icon: <EnvelopeClosedIcon />,
	},
	{
		title: "Analytics",
		href: "#",
		icon: <LightningBoltIcon />,
	},
	{
		title: "Create",
		href: "/create",
		icon: <LightningBoltIcon />,
	},
];

const BottomLinks = [
	{
		title: "Profile",
		href: "/profile",
		icon: <PersonIcon />,
	},
	{
		title: "Settings",
		href: "#",
		icon: <GearIcon />,
	},
];

const Sidebar = () => {
	const location = useLocation();

	const isActiveLink = (href: string) => {
	  return location.pathname === href;
	};


	return (
		<div className="flex flex-col py-3 px-6 h-full w-full justify-between items-start">
			<div className="flex flex-col items-start gap-12 h-full">
				<Link to="/">
				<img src="/images/directEd-horizontal.png" 
					width={'200px'} alt="DirectEd logo"/>
				</Link>
				<div className="flex flex-col items-start gap-6 ">
					{TopLinks.map((link, index) => (
						<Link to={link.href} key={index}>
							<div
								key={index}
								className={`flex items-center gap-3 cursor-pointer px-4 ${isActiveLink(link.href) ? ' text-[#395241] font-semibold border-l border-[#395241] shadow-md' : ''} hover:underline`}
							>
								<div>{link.icon}</div>
								<h2 className="md:text-lg">{link.title}</h2>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className="flex flex-col items-start gap-6">
				{BottomLinks.map((link, index) => (
					<Link to={link.href} key={index}>
						<div className="flex items-center gap-3 cursor-pointer hover:underline">
							<div>{link.icon}</div>
							<h2 className="md:text-lg">{link.title}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
