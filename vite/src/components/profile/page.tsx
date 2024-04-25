// import Title, { Subtitle } from "../../components/common/Title";
// import ChangeProfile from "../../components/common/UserImage";
// import { Badge } from "../../components/ui/badge";
// import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
// import { getCurrentUser } from "@/src/lib/session";
// import { getUserSubscription } from "@/src/lib/subscription";
// import { User } from "next-auth";
// import Image from "next/image";

const Profile = async () => {
	// const user = (await getCurrentUser()) as User;
	// const subscription = (await getUserSubscription(user.id)) as {
	// 	isPro: boolean;
	// };
	return (
		<div className="p-10 flex flex-col items-start gap-6 w-full h-full">
			<div className="flex items-start justify-between w-full">
				<div className="flex flex-col items-start gap-4">
					<h1 className="flex items-center gap-3">
						Profile
						<div  className="rounded-sm">
							{/* {subscription.isPro ? "Pro" : "Free"} */}
						</div>
					</h1>
					<h2>
						Your profile information is only visible to you and your
						organization.
					</h2>
				</div>
				{/* {user?.image && ( */}
					<img
						src=''
						// {user.image}
						width={110}
						height={110}
						alt=""
						className="rounded-full"
					/>
				{/* )} */}
			</div>
			<div className="flex justify-between items-center gap-4 flex-wrap w-full">
				<div className="grid w-full max-w-sm items-center gap-3">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						placeholder="Email"
						value=''
						// {user.email!}
					/>
				</div>
				{/* <ChangeProfile /> */}
			</div>
		</div>
	);
};

export default Profile;
