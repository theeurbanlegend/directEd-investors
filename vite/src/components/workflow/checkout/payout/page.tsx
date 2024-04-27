import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FaCreditCard, FaPaypal, FaBitcoin, FaApplePay } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';

//const stripePromise = loadStripe('your_stripe_publishable_key');

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate=useNavigate()
  const handleClick = async () => {
    // const stripe = await stripePromise;
    // const response = await fetch('/api/create-checkout-session', { method: 'POST' });
    // const session = await response.json();
    // const result = await stripe?.redirectToCheckout({ sessionId: session.id });
    // if (result?.error) {
    //   console.error(result.error.message);
    // }
    navigate('/portfolio')
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-lg rounded-md w-3/4">
        <div className="grid grid-cols-2 gap-8">
          {/* First Column: Details of the selected pool and investment amount */}
          <div>
            {/* Display details of the selected pool and investment amount */}
            <h2 className="text-2xl font-semibold mb-4">Selected Pool</h2>
            {/* Replace the following with actual details */}
            <p>Pool Name: XYZ</p>
            <p>Investment Amount: $1000</p>
          </div>

          {/* Second Column: Payment options */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
            <div className="flex flex-col space-y-4">
              {/* Display payment options with icons */}
              <button className="flex items-center bg-blue-500 text-white py-2 px-4 rounded" onClick={() => handlePaymentMethodChange('credit-card')}>
                <FaCreditCard /> Pay with Credit Card
              </button>
              <button className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded" onClick={() => handlePaymentMethodChange('paypal')}>
                <FaPaypal /> Pay with PayPal
              </button>
              <button className="flex items-center bg-yellow-500 text-white py-2 px-4 rounded" onClick={() => handlePaymentMethodChange('bitcoin')}>
                <FaBitcoin /> Pay with Bitcoin
              </button>
              <button className="flex items-center bg-black text-white py-2 px-4 rounded" onClick={() => handlePaymentMethodChange('apple-pay')}>
                <FaApplePay /> Pay with Apple Pay
              </button>
            </div>
          </div>
        </div>

        {/* Stripe integration for secure payment processing */}
        {paymentMethod && (
          <button className="bg-green-500 text-white py-2 px-4 rounded mt-4" onClick={handleClick}>
            Confirm Payment
          </button>
        )}

        {/* Confirmation message after a successful investment */}
        {paymentMethod && (
          <div className="mt-4">
            <p className="text-green-700 font-semibold">Payment Successful!</p>
            <p>Thank you for your investment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
