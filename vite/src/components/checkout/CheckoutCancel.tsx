import { Link } from "react-router-dom";
const CheckoutCancel = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Checkout Cancelled</h1>
        <p className="text-gray-700 mb-4">Your payment was not processed</p>
        <Link to="/pools" className="bg-[#395241] text-[#FDFDFD] text-sm  font-semibold py-2 px-8 rounded-xl mx-auto">
            Back to Pools
        </Link>
        </div>
    );
    }
    export default CheckoutCancel;