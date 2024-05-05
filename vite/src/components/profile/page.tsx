import React, { useEffect } from 'react';
import Title, { Subtitle } from '../../common/Title';
import { Badge } from '../../common/badge';
import LandingLayout from '../portfolio/layout';
import { Label } from '../ui/label';
import { useUserContext } from '../../context/userContext';

// Sample data for development (commented out original data fetching)
const sampleUser = {
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU',
	id: 123,
	email: 'example@example.com',
	tokenBalance: 1000, // Sample token balance amount
	studentsInvestedIn: 5, // Sample number of students invested in
	cashInvestedSinceStart: 5000, // Sample cash amount invested since start
};

const sampleSubscription = {
	isPro: true, // or false for free subscription
};

const Profile = () => {
	const { name, email, getCurrentUser } = useUserContext()

	useEffect(() => {
		getCurrentUser()
	}, [])
	// Use sample data for development
	const user = sampleUser;
	const subscription = sampleSubscription;

	return (
		<LandingLayout>
			<div className="flex flex-col items-center justify-center h-full">
				<div className="p-10 w-full max-w-md">
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
								{subscription.isPro ? 'Pro' : 'Free'}
							</Badge>
						</Title>
						<Subtitle className='text-center'>
							Your profile information is only visible to you and your organization.
						</Subtitle>
						<div className="w-full mt-10">
							<div className="text-center">
								<Label>Name:</Label>
								<p className="text-2xl font-bold">{name}</p>
								<Label>Email:</Label>
								<p className="text-xl">{email}</p>
								<Label>Token Balance:</Label>
								<p className="text-xl">{user.tokenBalance}</p>
								<Label>Students Invested In:</Label>
								<p className="text-xl">{user.studentsInvestedIn}</p>
								<Label>Cash Invested Since Start:</Label>
								<p className="text-xl">{user.cashInvestedSinceStart}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LandingLayout>
	);
};

export default Profile;