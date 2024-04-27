import { useState } from 'react';
import {Link, useNavigate }from 'react-router-dom';
import StudentProfileCard from '../../students/StudentProfileCard';
import Navbar from '../../Navbar';
import Footer from '../../Footer';

const InvestmentOpportunity = () => {
  const navigate=useNavigate()
  const opportunity = {
    description: "Invest in students enrolled in a 15-week intensive tech skills bootcamp. They will learn programming languages, web development, and software engineering fundamentals.",
    targetAmount: "$50,000",
    progress: "$20,000 raised (40%)",
    tokens: "Investors receive 1 token for every $100 invested, redeemable for a percentage of the students' future earnings.",
    minimumInvestment: "$500",
    paymentMethod: "Credit Card (via Stripe)",
    returnDetail: "Investors will receive tokens equivalent to their investment amount, which can be redeemed for a percentage of the students' future earnings after they secure employment.",
    impact: "Funds will cover tuition fees, materials, and living expenses for students during the bootcamp.",
    students: [
        {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU',
          name: "Sarah Johnson",
          education: "Bachelor's degree in Computer Science",
          careerGoals: "Aspires to become a full-stack developer",
          experience: "Completed internships at leading tech companies, participated in hackathons",
          fundingNeed: "Seeking financial support to cover tuition fees and living expenses during the bootcamp",
        },
        {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU',
          name: "John Smith",
          education: "High school graduate with a passion for technology",
          careerGoals: "Aims to transition into a career in software development",
          experience: "Self-taught coder, participated in coding competitions",
          fundingNeed: "Requires assistance to afford bootcamp tuition and materials",
        },
      
      
    ],
  };

  const [tokens, setTokens]  = useState(0);

  const tokenchange = (e:any) => {
    setTokens(e.target.value)
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white p-10 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full max-w-6xl mx-auto">
        <div className="px-4 py-5 sm:px-6 flex items-center justify-start  gap-3">
          <div className='mr-auto'>
          <label htmlFor="token">Tokens To Invest</label>
         <input type="number" className='border p-2 border-indigo-200 rounded-full' value={tokens} onChange={tokenchange}/>
         </div>

         <div className="px-4 py-5 sm:px-6">
          <button className="bg-[#395241] text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline" onClick={()=>navigate('/pay')}>
            Invest Now
          </button>
        </div>

        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Target Amount</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.targetAmount}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Progress</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.progress}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Tokens</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.tokens}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Minimum Investment</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.minimumInvestment}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.paymentMethod}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Investment Return</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.returnDetail}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Impact</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.impact}</dd>
            </div>
          </dl>
        </div>

        <div className="px-4 py-5 sm:px-6 ">
          <h3 className="text-lg font-medium text-gray-900 text-center mb-10">Student Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 md:ml-28">
            {opportunity.students.map(student => (
              <StudentProfileCard key={student.name} student={student} /> 
            ))}
          </div>
        </div>
        <div className="px-4 py-5 sm:px-6 flex justify-center">
            <button className="bg-[#395241] text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline" onClick={() => navigate('/login')}>
              Sign in to take part in the future
            </button>
          </div>
      </div>
    </div>    
    <Footer/>
    </>

  );
};

export default InvestmentOpportunity;