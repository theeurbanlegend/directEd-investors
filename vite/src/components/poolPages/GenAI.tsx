import React from 'react';
import LandingLayout from '../portfolio/layout';

const GenAI: React.FC = () => {
    return (
        <LandingLayout>
            <div className="flex justify-center items-center h-full ">
                <div className="flex flex-col md:flex-row items-center w-full p-4">
                <div className="md:w-1/3 text-center p-4">
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
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Generative AI</h1>
                </div>

                {/* Right Column (Details) */}
                <div className="md:w-2/3 p-4">
                    <section className="my-8">
                        <h2 className="text-2xl font-bold mb-4">Detailed Information about Generative AI</h2>
                        <p className="text-lg mb-4">
                            Generative AI, or generative artificial intelligence, refers to AI systems capable of creating new data or content that resembles existing data. It encompasses various techniques such as generative adversarial networks (GANs), autoencoders, and reinforcement learning.
                        </p>
                        <p className="text-lg mb-4">
                            Generative AI has applications in various fields, including art, music, writing, and design. It can be used to generate realistic images, create music compositions, generate text, and even design new products.
                        </p>
                    </section>
                    <section className="my-8">
                        <h2 className="text-2xl font-bold mb-4">Investment Opportunity</h2>
                        <p className="text-lg mb-4">
                            Investing in the development of generative AI technologies offers an opportunity to leverage the power of AI for creative and innovative purposes. By supporting research and education in this field, investors can contribute to the advancement of AI-driven creativity and innovation.
                        </p>
                        <p className="text-lg mb-4">
                            Generative AI technologies have the potential to revolutionize various industries, including entertainment, marketing, healthcare, and manufacturing. Investing in this area can lead to the development of new products, services, and experiences that enhance human creativity and productivity.
                        </p>
                    </section>
                </div>
                </div>
            </div>
        </LandingLayout>
    );
};

export default GenAI;