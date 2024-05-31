import React, { useEffect, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { FaCreditCard, FaPaypal, FaBitcoin, FaApplePay } from "react-icons/fa"; // Import icons
import { useNavigate, useParams } from "react-router-dom";
import { useGetPoolQuery } from "../../hooks/useGetPoolById";
import { validateMongoId } from "../../utils";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutPage: React.FC = () => {
  const toastId= useRef<any>(null)
  const [paymentMethod, setPaymentMethod] = useState("");
  const tokens=localStorage.getItem('tokens')
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
      window.history.replaceState({}, "", `/pool/${pool.pool_slug}`);
      localStorage.setItem("poolId", pool._id);
    }
  }, [isSuccessPool]);
  const navigate = useNavigate();
  const handleClick = async () => {
    toastId.current = toast.loading('Processing payment...', { autoClose: false });
    const stripe = await stripePromise;
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/checkout/${pool._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentMethod, pool, tokens }),
      }
    );
    const session = await response.json()
    toast.dismiss(toastId.current)
    toast.info('Redirecting to payment gateway...')
    const result = await stripe?.redirectToCheckout({ sessionId: session.id });
    if (result?.error) {
      console.error(result.error.message);
    }
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* First Column: Details of the selected pool and investment amount */}
          <div>
            {/* Display details of the selected pool and investment amount */}
            <h2 className="text-2xl font-semibold mb-4">Selected Pool</h2>
            {/* Replace the following with actual details */}
            <p className="text-gray-700">Pool Name: {pool.pool_name}</p>
            <p className="text-gray-700">Investment Amount: ${tokens}</p>
          </div>

          {/* Second Column: Payment options */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
            <div className="flex flex-col space-y-4">
              {/* Display payment options with icons */}
              <button
                className="flex items-center bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => handlePaymentMethodChange("credit-card")}
              >
                <FaCreditCard className="mr-2" /> Pay with Credit Card
              </button>
              <button
                className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded"
                disabled
                onClick={() => handlePaymentMethodChange("paypal")}
              >
                <FaPaypal className="mr-2" /> Pay with PayPal
              </button>
              <button
                className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded"
                disabled
                onClick={() => handlePaymentMethodChange("bitcoin")}
              >
                <FaBitcoin className="mr-2" /> Pay with Bitcoin
              </button>
              <button
                className="flex items-center bg-black text-white py-2 px-4 rounded"
                disabled
                onClick={() => handlePaymentMethodChange("apple-pay")}
              >
                <FaApplePay className="mr-2" /> Pay with Apple Pay
              </button>
            </div>
          </div>
        </div>

        {/* Stripe integration for secure payment processing */}
        {paymentMethod && (
          <button
            className="bg-green-500 text-white py-2 px-4 rounded mt-4"
            onClick={handleClick}
          >
            Confirm Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
