import React from 'react';

interface Investment {
  pool: string;
  amount: number;
  tokensEarned: number;
  status: string;
  returns: string;
}

interface Props {
  investments: Investment[];
  totalInvestment: number;
  tokenBalance: number;
}

const PortfolioPage: React.FC<Props> = ({ investments, totalInvestment, tokenBalance }) => {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-full">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          {investments.map((investment, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <h4 className="text-lg font-semibold">Investment Pool: {investment.pool}</h4>
              <p>Investment Amount: ${investment.amount}</p>
              <p>Tokens Earned: {investment.tokensEarned} tokens</p>
              <p>Investment Status: {investment.status}</p>
              <p>Potential Returns: {investment.returns}</p>
            </div>
          ))}
        </div>
        <p className="mt-4">Total Investment: ${totalInvestment}</p>
        <p>Token Balance: {tokenBalance} tokens</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Redeem Tokens</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Add Funds</button>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Investment History</h3>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Return on Investment (ROI) Tracker</h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
