import Title, { Subtitle } from "../../common/Title";
import { Badge } from "../../common/badge";
import { Input } from "../../common/input";
import LandingLayout from "../portfolio/layout";
import { Label } from "../ui/label";

// Sample data for development (commented out original data fetching)
const sampleUser = {
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU",
	id: 123,
	email: "example@example.com",
};

const sampleSubscription = {
	isPro: true, // or false for free subscription
};

const Profile = () => {
	// Original data fetching (commented out for development)
	// const user = (await getCurrentUser()) as User;
	// const subscription = (await getUserSubscription(user.id)) as { isPro: boolean; };

	// Use sample data for development
	const user = sampleUser;
	const subscription = sampleSubscription;

	return (
		<LandingLayout>
			<div className="p-10 flex flex-col items-center  gap-6 w-full h-full">
				<div className="">
					<div className="flex flex-col items-center gap-4">
						{user?.image && (
							<img
								src={user.image}
								width={110}
								height={110}
								alt=""
								className="rounded-full"
							/>
						)}
						<Title className="flex items-center gap-3">
							Profile
							<Badge variant="default" className="rounded-sm">
								{subscription.isPro ? "Pro" : "Free"}
							</Badge>
						</Title>
						<Subtitle>
							Your profile information is only visible to you and your organization.
						</Subtitle>
						<div className="w-full mt-10 mx-auto">
							<div className="grid max-w-sm items-center gap-3">
								<Label htmlFor="email">Email</Label>
								<Input
									type="email"
									id="email"
									placeholder="Email"
									value={user.email}
								/>
							</div>
							{/* <ChangeProfile /> */}
						</div>
					</div>
				</div>

			</div>
		</LandingLayout>

	);
};

export default Profile;
