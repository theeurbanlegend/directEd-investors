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
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 w-3/4">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <h3 className="text-xl font-semibold mb-2">Your Investments</h3>
        <div className="space-y-4">
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
          {/* Display investment history here */}
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Return on Investment (ROI) Tracker</h3>
          {/* Display ROI tracker here */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
