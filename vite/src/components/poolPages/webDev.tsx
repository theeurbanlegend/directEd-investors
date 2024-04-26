import React from 'react';
import InvestmentOpportunity from '../investments/details/InvestmentDetails';

const WEBDEV: React.FC = () => {
    return (
        <>
            <div className="flex justify-center mt-8">
                <h1 className="text-6xl text-gray-500">&lt;&gt;</h1>
            </div>
            <div className="mx-auto p-4">
                <section className="my-8 text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Detailed Information about Website Development</h2>
                    <p className="text-lg mb-4">
                        Website development involves creating, designing, and maintaining websites. It encompasses various aspects such as web design, front-end development, back-end development, and web content management.
                    </p>
                    <p className="text-lg mb-4">
                        Web developers use various programming languages, frameworks, and tools to build responsive and interactive websites. They ensure that websites are visually appealing, user-friendly, and accessible across different devices and browsers.
                    </p>
                </section>
                <section className="my-8 text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold mb-4">Overview of Investment Opportunity</h2>
                    <p className="text-lg mb-4">
                        Investing in students to study website development offers an opportunity to support the next generation of web developers. By providing funding for education in this field, investors can contribute to the growth of the digital economy.
                    </p>
                    <p className="text-lg mb-4">
                        Web development skills are in high demand in industries such as technology, e-commerce, media, and entertainment. Investing in students' education in this area can lead to rewarding career opportunities and innovation in various sectors.
                    </p>
                </section>
                {/* <section className="my-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Progress Towards Funding Goal</h2>
                    <div className="bg-gray-200 h-8 w-full rounded-md overflow-hidden mb-4 mx-auto">
                        <div className="bg-green-500 h-full"></div>
                    </div>
                    <p className="text-lg">
                        This is an animated representation of progress towards the funding goal.
                    </p>
                </section> */}
                <section className="my-8 text-center max-w-4xl mx-auto">
                <InvestmentOpportunity/>
                </section>
            </div>
        </>
    );
};

export default WEBDEV;
