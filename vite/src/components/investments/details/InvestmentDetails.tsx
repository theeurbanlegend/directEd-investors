import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams }from 'react-router-dom';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { validateMongoId } from '../../../utils';
import { useGetPoolQuery } from '../../../hooks/useGetPoolById';
import { toast } from 'react-toastify';

const InvestmentOpportunity = () => {
  let { id } = useParams();
  if (!id) {
    throw new Error("Pool ID is required");
  }
  if (validateMongoId(id) === false) {
    id = localStorage.getItem("poolId") as string;
  }
  const { pool, isLoadingPool, isSuccessPool } = useGetPoolQuery({ id });
  useEffect(() => {
    //when isSuccess Pool replace href from id to sluf
    if (isSuccessPool && pool) {
      window.history.replaceState({}, "", `/pool/${pool.pool_slug}/invest`);
      localStorage.setItem("poolId", pool._id);
    }
  }, [isSuccessPool]);
  const navigate=useNavigate()
  const handleNavigate=()=>{
    if(tokens<500){
      toast.warning('Minimum investment for this pool is $500') 
      return
    }
    localStorage.setItem('tokens', tokens.toString()) 
    navigate(`/pool/${pool._id}/invest/checkout`)
  }
  const parseProgress = (progress: number) => {
    // remove comma from pool_target_amnt then calculate amount raised
    const amountRaised = Number(pool?.pool_target_amnt.replace(/,/g, '')) * (Number(progress) / 100);
    return `$${amountRaised} raised (${progress}%)`;
  }
  const opportunity = {
    poolChosen: pool?.pool_name,
    description: pool?.pool_desc,
    targetAmount: `$${pool?.pool_target_amnt}`,
    progress: parseProgress(pool?.pool_progress),
    tokens: "Investors receive 1 token for every $100 invested, redeemable for a percentage of the students' future earnings.",
    minimumInvestment: "$500",
    paymentMethod: "Credit Card (via Stripe)",
    returnDetail: "Investors will receive tokens equivalent to their investment amount, which can be redeemed for a percentage of the students' future earnings after they secure employment.",
    impact: "Funds will cover tuition fees, materials, and living expenses for students during the bootcamp.",
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
          <label htmlFor="token">Amount To Invest</label>
          <input type="number" className='border p-2 ml-4 border-indigo-200 rounded-full' value={tokens} onChange={tokenchange}/>
         </div>

        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Pool To Invest</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.poolChosen}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{opportunity.description}</dd>
            </div>
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
        <div className="px-4 py-5 sm:px-6 flex justify-center">
            <button className="bg-[#395241] text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline" onClick={handleNavigate}>
              Checkout
            </button>
          </div>
      </div>
    </div>    
    <Footer/>
    </>

  );
};

export default InvestmentOpportunity;