import { Link, useParams } from "react-router-dom";
import { validateMongoId } from "../../utils";
import { useGetPoolQuery } from "../../hooks/useGetPoolById";
import { useEffect } from "react";

const CheckoutSuccess = () => {
  let { id } = useParams();
  if (!id) {
    throw new Error("Pool ID is required");
  }
  if (validateMongoId(id) === false) {
    id = localStorage.getItem("poolId") as string;
  }
  const { pool, isSuccessPool } = useGetPoolQuery({ id });
  useEffect(() => {
    //when isSuccess Pool replace href from id to sluf
    if (isSuccessPool && pool) {
      window.history.replaceState({}, "", `/pool/${pool.pool_slug}/invest/success`);
      localStorage.setItem("poolId", pool._id);
    }
  }, [isSuccessPool]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Checkout Success</h1>
      <p className="text-gray-700 mb-4">Your payment was successful</p>
      <p className="text-gray-700 mb-4">Thank you for investing with us</p>
      <p className="text-gray-700 mb-4">Pool Name: {pool && pool.pool_name}</p>


      <Link
        to="/portfolio"
        className="bg-[#395241] text-[#FDFDFD] text-sm  font-semibold py-2 px-8 rounded-xl mx-auto"
      >
        Back to Portfolio
      </Link>
    </div>
  );
};
export default CheckoutSuccess;
