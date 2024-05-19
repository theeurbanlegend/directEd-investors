import React, { useEffect, useRef } from "react";
import LandingLayout from "../portfolio/layout";
import StudentProfileCard from "../students/StudentProfileCard";
import { useQuery } from "react-query";
import { getStudents } from "../../api/requests/getStudents";
import { FaArrowAltCircleDown } from "react-icons/fa";

const UIUIX: React.FC = () => {
    const detailsRef = useRef<HTMLDivElement>(null);
    const profilesRef = useRef<HTMLDivElement>(null);

    const { data: studentsData, isLoading, isError } = useQuery("students", getStudents);

    const scrollToStudentProfiles = () => {
        if (profilesRef.current) {
            profilesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <LandingLayout>
            <div className="h-full flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row items-center w-full p-4" ref={detailsRef}>
                    <div className="md:w-1/3 text-center md:text-left p-4">
                        <div className="flex justify-center p-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-24 w-24 text-gray-500 mb-4 mx-auto"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2.5c4.142 0 7.5 3.358 7.5 7.5S14.142 17.5 10 17.5 2.5 14.142 2.5 10 5.858 2.5 10 2.5zm.834 5.15c.032.156.047.316.047.477 0 2.366-1.914 4.28-4.28 4.28a4.28 4.28 0 0 1 4.28-4.28zm-.603 7.07a5.647 5.647 0 0 0 1.473-.197 4.944 4.944 0 0 1-1.473.197zm4.278-1.22a4.28 4.28 0 0 1-4.28 4.28c-.16 0-.32-.015-.477-.047a5.647 5.647 0 0 0 1.72-1.72 5.647 5.647 0 0 0 1.72 1.72c-.157.032-.317.047-.476.047zM5.152 9.834a5.647 5.647 0 0 0-.197-1.473A4.944 4.944 0 0 1 5.152 9.834zm1.22-4.278a4.28 4.28 0 0 1 4.28-4.28c0 .157.015.316.047.477a5.647 5.647 0 0 0-1.72 1.72 5.647 5.647 0 0 0-1.72-1.72c.032-.157.047-.316.047-.477zm10.998 6.255a5.647 5.647 0 0 0-.197 1.473 4.944 4.944 0 0 1-.197-1.473zm-1.22 4.278a4.28 4.28 0 0 1-4.28 4.28c.157 0 .316-.015.477-.047a5.647 5.647 0 0 0 1.72-1.72 5.647 5.647 0 0 0 1.72 1.72c.156-.032.316-.047.476-.047zm-5.75-7.967c-.156 0-.316.015-.477.047a5.647 5.647 0 0 0-1.72-1.72 5.647 5.647 0 0 0-1.72 1.72c-.157-.032-.317-.047-.476-.047a4.28 4.28 0 0 1 4.28-4.28c.16 0 .32.015.477.047a5.647 5.647 0 0 0 1.72 1.72 5.647 5.647 0 0 0-1.72 1.72zM7.379 5.51A3.948 3.948 0 0 1 10 4.5c.527 0 1.04.103 1.521.29A3.94 3.94 0 0 1 15.5 7.38c0 .994-.367 1.904-.97 2.608a5.94 5.94 0 0 0-4.218-4.218zM4.868 8.021a3.94 3.94 0 0 1-.29-1.521 3.94 3.94 0 0 1 2.87-3.87 5.94 5.94 0 0 0-4.219 4.219c.702.603 1.612.97 2.639.97.213 0 .425-.019.632-.056zM3.5 10c0-.527.103-1.04.29-1.521A3.94 3.94 0 0 1 7.38 4.5c-.994 0-1.904.367-2.608.97a5.94 5.94 0 0 0-4.218 4.219c.603.702.97 1.612.97 2.639 0 .213-.019.425-.056.632A3.948 3.948 0 0 1 3.5 10zm10.121 3.379a3.948 3.948 0 0 1-2.121 2.121c-.207.037-.419.056-.632.056-.527 0-1.04-.103-1.521-.29A3.94 3.94 0 0 1 7.38 15.62c0-.994.367-1.904.97-2.608a5.94 5.94 0 0 0 4.219 4.219c.705-.603 1.615-.97 2.642-.97.213 0 .425.019.632.056zM15.5 12.62c.994 0 1.904-.367 2.608-.97a5.94 5.94 0 0 0 4.219-4.219c-.603-.702-1.612-.97-2.639-.97-.213 0-.425.019-.632.056a3.948 3.948 0 0 1-2.121 2.121c-.207.037-.419.056-.632.056-.527 0-1.04-.103-1.521-.29a3.94 3.94 0 0 1-.97 2.608c.702.603 1.612.97 2.639.97.213 0 .425-.019.632-.056z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">
                            UI/UX Design
                        </h1>
                    </div>

                    <div className="md:w-2/3 p-6">
                        <section className="my-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">UI/UX Design</h2>
                            <p className="text-lg mb-4">
                                UI/UX design focuses on creating user-friendly and visually appealing interfaces for websites and applications. It involves understanding user behavior, designing intuitive navigation, and optimizing the user experience.
                            </p>
                        </section>

                        <section className="my-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Investment Opportunity</h2>
                            <p className="text-lg mb-4">
                                Investing in students to study UI/UX design offers an opportunity to support the development of user-centric digital products. By providing funding for education in this field, investors can contribute to the creation of more intuitive and engaging interfaces.
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

            </div>

            <section ref={profilesRef} className="h-screen flex justify-center items-center">
                <div className="p-10">
                    <div className="flex flex-row justify-center">
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : isError ? (
                            <p>Error fetching data</p>
                        ) : (
                            studentsData &&
                            studentsData.map((student: any, index: number) => (
                                <StudentProfileCard key={index} student={student} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
};

export default UIUIX;

