import React, { useEffect, useRef } from "react";
import LandingLayout from "../portfolio/layout";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetPoolQuery } from "../../hooks/useGetPoolById";
import StudentProfileCard from "../students/StudentProfileCard";
import { validateMongoId } from "../../utils";

const PoolPageCard: React.FC = () => {
  const detailsRef = useRef<HTMLDivElement>(null);
  const profilesRef = useRef<HTMLDivElement>(null);
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
  const scrollToStudentProfiles = () => {
    if (profilesRef.current) {
      profilesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LandingLayout>
      {pool && (
        <div className="flex flex-col justify-center items-center w-full">
          <div
            className="flex flex-col md:flex-row items-center w-full p-4"
            ref={detailsRef}
          >
            <div className="md:w-1/3 text-center md:text-left p-4">
              <div className="flex justify-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24 text-gray-500 mb-4 mx-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="8" />
                  <line x1="16.5" y1="19.5" x2="19.5" y2="16.5" />
                  <line x1="8" y1="12" x2="8" y2="12" />
                  <line x1="8" y1="16" x2="8" y2="16" />
                  <line x1="4.5" y1="19.5" x2="1.5" y2="16.5" />
                  <line x1="16" y1="8" x2="16" y2="8" />
                  <line x1="16" y1="12" x2="16" y2="12" />
                  <line x1="19.5" y1="16.5" x2="16.5" y2="19.5" />
                </svg>
              </div>
              <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">
                {pool.pool_name}
              </h1>
            </div>

            <div className="md:w-2/3 p-6">
              <section className="my-8 text-center">
                <h2 className="text-2xl font-bold mb-4">{pool.pool_name}</h2>
                <p className="text-lg mb-4">
                  Generative AI, or generative artificial intelligence, refers
                  to AI systems capable of creating new data or content that
                  resembles existing data. It encompasses various techniques
                  such as generative adversarial networks (GANs), autoencoders,
                  and reinforcement learning.
                </p>
              </section>

              <section className="my-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Investment Opportunity
                </h2>
                <p className="text-lg mb-4">
                  Investing in the development of generative AI technologies
                  offers an opportunity to leverage the power of AI for creative
                  and innovative purposes. By supporting research and education
                  in this field, investors can contribute to the advancement of
                  AI-driven creativity and innovation.
                </p>
              </section>
            </div>
          </div>

          <button
            className="mt-10 flex justify-center items-center"
            style={{
              padding: "10px",
              backgroundColor: "transparent",
              color: "black",
              border: "2px solid #007bff",
              borderRadius: "50%",
              cursor: "pointer",
              width: "40px",
              height: "40px",
            }}
            onClick={scrollToStudentProfiles}
          >
            <FaArrowAltCircleDown style={{ fontSize: "24px" }} />
          </button>

          <section
            ref={profilesRef}
            className="w-full flex justify-center items-center mt-10"
          >
            <div className="p-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pool.students.length > 0 ? (
                  pool.students.map((student: any, index: number) => (
                    <StudentProfileCard key={index} student={student} />
                  ))
                ) : (
                  <p className="w-full text-center col-span-3">
                    No students for this pool yet!
                  </p>
                )}
              </div>
            </div>
          </section>
          <div className="px-6 pt-2 pb-2 text-center mb-10">
            <a
              href={`/pool/${pool._id}/invest`}
              className="bg-[#395241] text-[#FDFDFD] text-sm  font-semibold py-2 px-8 rounded-xl mx-auto"
            >
              Invest now
            </a>
          </div>
        </div>
      )}
    </LandingLayout>
  );
};

export default PoolPageCard;
