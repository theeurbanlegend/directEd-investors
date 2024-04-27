// import SocialLinks from "../components/common/Socials";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";

const Footer = () => {
	
	const currentYear=new Date().getFullYear()
	return (
		<div className="flex items-start bg-[#395241] text-white gap-10 p-8 justify-between w-full md:flex-row flex-col md:gap-4 ">
			<div className="flex items-start gap-4 flex-col">
				{/* <h1>
					<img src="/images/directEd.png" alt="DirectEd logo footer" width={'150px'}/>
				</h1> */}
				<h2>
					DirectEd helps you find the best talent to invest in.
				</h2>
				{/* <SocialLinks /> */}
				<h2 className="text-[13px]">
					Copyright © {currentYear} DirectEd Development. All rights reserved.
				</h2>
			</div>

			{Links.map((link, i) => (
				<div key={i} className="flex items-start gap-4 flex-col">
					<h2 className="font-normal text-[16px]">
						{link.heading}
					</h2>
					{link.items.map((item, i) => (
						<h2 key={i} className="text-[13px]">
							{item.name}
						</h2>
					))}
				</div>
			))}
			<div className="flex items-start gap-4 flex-col">
				<h2 className="font-normal text-[16px]">Newsletter</h2>
				<h2 className="text-[13px]">
					Subscribe to our newsletter to get the latest news and updates.
				</h2>
				<div className="flex items-start gap-4 md:flex-row flex-col md:w-fit w-full">
					<input placeholder="Email Address" 
					className="p-2"
					/>
					<button>Subscribe</button>
				</div>
			</div>
		</div>
	);
};

export default Footer;

const Links = [
	{
		heading: "Pages",
		items: [
			{
				name: "Home",
				link: "/",
			},
			{
				name: "About",
				link: "/about",
			},
			{
				name: "Contact",
				link: "/contact",
			},
		],
	},
	{
		heading: "Legal",
		items: [
			{
				name: "Terms & Conditions",
				link: "/terms",
			},
			{
				name: "Privacy Policy",
				link: "/privacy",
			},
			{
				name: "Cookie Policy",
				link: "/cookie",
			},
		],
	},
];
