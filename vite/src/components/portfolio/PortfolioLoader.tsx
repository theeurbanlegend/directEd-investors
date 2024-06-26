import { Skeleton } from '@radix-ui/themes';


const PortfolioLoader = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          {Array.from('skeleton').map((_investment, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 flex flex-col gap-4">
                <Skeleton className="text-lg font-semibold" height={'20px'} />
                <Skeleton className="text-lg font-semibold" height={'20px'} />
                <Skeleton className="text-lg font-semibold" height={'20px'} />
                <Skeleton className="text-lg font-semibold" height={'20px'} />
                <Skeleton className="text-lg font-semibold" height={'20px'} />
            </div>
          ))}
        </div>
        <p className="mt-4">Total Investment: <Skeleton className="text-lg font-semibold" /></p>
        <p>Token Balance: <Skeleton className="text-lg font-semibold" /></p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Redeem Tokens</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Add Funds</button>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Investment History</h3>
          <p className='text-center'>Coming Soon...</p>
        </div>
        {/* <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Return on Investment (ROI) Tracker</h3>
        </div> */}
      </div>
    </div>
  );
};

export default PortfolioLoader;
