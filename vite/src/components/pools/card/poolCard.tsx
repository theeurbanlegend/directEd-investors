import React from "react";

interface CardProps {
  heading1: string;
  paragraph: string;
  heading2: string;
  fraction: string;
  heading3: string;
  progress: number;
  paragraph2: string;
  Link: string;
}
interface Pool {
  _id: string;
  pool_name: string;
  pool_slug: string;
  pool_desc: string;
  pool_target_amnt: string;
  pool_progress: number;
  pool_token: number;
  pool_token_value: number;
  pool_extra_desc: string;
  pool_link: string;
}

const Cards: React.FC<Pool> = ({ pool }: any) => {
  const renderCard = ({
    heading1,
    paragraph,
    heading2,
    fraction,
    heading3,
    progress,
    paragraph2,
    Link,
  }: CardProps) => {
    return (
      <div
        className="max-w-lg rounded-xl overflow-hidden shadow-lg"
        key={pool._id}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 text-center">{heading1}</div>
          <p className="text-gray-700 italic text-xs mb-4 text-center">
            {paragraph}
          </p>
          <div className="font-semibold text-sm mt-6  mb-2 text-center">
            {heading2}
          </div>
          <p className="text-gray-700 font-semibold text-sm  mb-4 text-center">
            {fraction}
          </p>
          <div className="font-semibold text-sm mt-6  mb-2 text-center">
            {heading3}
          </div>
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded mt-2">
            <div
              className="bg-[#395241] py-1 rounded text-center text-xs text-white w-10 mb-4"
              style={{ width: `${progress}%` }} // Adjust the maxWidth here
            >
              {progress}%
            </div>
          </div>
          <p className="text-gray-700 italic text-xs mb-2 text-center">
            {paragraph2}
          </p>
        </div>
        <div className="px-6 pt-2 pb-2 text-center mb-10">
          <a
            href={Link}
            className="bg-[#395241] text-[#FDFDFD] text-sm  font-semibold py-2 px-8 rounded-xl mx-auto"
          >
            Invest now
          </a>
        </div>
      </div>
    );
  };

  return (
    pool &&
    renderCard({
      heading1: pool.pool_name,
      paragraph: pool.pool_desc,
      heading2: "Target Amount",
      fraction: pool.pool_target_amnt,
      heading3: "Progress",
      progress: pool.pool_progress, // Pass the progress percentage here
      paragraph2: pool.pool_extra_desc,
      Link: `/pool/${pool._id}`,
    })
  );
};

export default Cards;
