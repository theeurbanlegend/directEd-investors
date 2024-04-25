import React from 'react';

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

const Pools: React.FC = () => {
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
      <div className="max-w-lg rounded-xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 text-center">{heading1}</div>
          <p className="text-gray-700 italic text-xs mb-4 text-center">{paragraph}</p>
          <div className="font-semibold text-sm mt-6  mb-2 text-center">{heading2}</div>
          <p className="text-gray-700 font-semibold text-sm  mb-4 text-center">{fraction}</p>
          <div className="font-semibold text-sm mt-6  mb-2 text-center">{heading3}</div>
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded mt-2">
            <div
              className="bg-[#395241] py-1 rounded text-center text-xs text-white w-10 mb-4"
              style={{ width: `${progress}%` }} // Adjust the maxWidth here
            >
              {progress}%
            </div>
          </div>
          <p className="text-gray-700 italic text-xs mb-2 text-center">{paragraph2}</p>
        </div>
        <div className="px-6 pt-2 pb-2 text-center mb-10">
          <a href={Link} className="bg-[#395241] text-[#FDFDFD] text-sm  font-semibold py-2 px-8 rounded-xl mx-auto">
            Invest now
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto p-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-screen-lg mx-auto">
        <div className="text-center md:hidden font-bold text-xl">Website Development</div>
        {renderCard({
          heading1: "Website Development",
          paragraph: "Invest in a team of experienced web developers creating modern and responsive websites for businesses and individuals. The team uses the latest technologies and frameworks to deliver high-quality web solutions tailored to client needs.",
          heading2: "Target Amount",
          fraction: "$50,000",
          heading3: "Progress",
          progress: 20, // Pass the progress percentage here
          paragraph2: "Investors receive 1 token for every $200 invested, redeemable for a percentage of the entrepreneurs' future earnings.",
          Link: "https://example.com",
        })}
        <div className="text-center mt-10 md:hidden font-bold text-xl">UI/UX Design</div>
        {renderCard({
          heading1: "UI/UX Design",
          paragraph: "Invest in a team of skilled UI/UX designers creating intuitive and visually appealing user interfaces and experiences for digital products. The team conducts extensive user research and employs best design practices to ensure seamless interaction and user satisfaction.",
          heading2: "Target Amount",
          fraction: "$100,000",
          heading3: "Progress",
          progress: 50, // Pass the progress percentage here
          paragraph2: "Investors receive 1 token for every $200 invested, redeemable for a percentage of the entrepreneurs' future earnings.",
          Link: "https://example.com",
        })}
        <div className="text-center mt-10 md:hidden font-bold text-xl">Generative AI</div>
        {renderCard({
          heading1: "Generative AI",
          paragraph: "Invest in research and development of generative artificial intelligence algorithms, which can autonomously create diverse outputs such as images, music, and text. These algorithms have applications in creative industries, content generation, and personalized user experiences.",
          heading2: "Target Amount",
          fraction: "$75,000",
          heading3: "Progress",
          progress: 80, // Pass the progress percentage here
          paragraph2: "Investors receive 1 token for every $200 invested, redeemable for a percentage of the entrepreneurs' future earnings.",
          Link: "https://example.com",
        })}
      </div>
    </div>
  );
};

export default Pools;
