import React, { useEffect, useRef, useState } from "react";
import LandingLayout from "../portfolio/layout";
import StudentProfileCard from "../students/StudentProfileCard";
import { FaArrowAltCircleDown } from "react-icons/fa";

const studentData = {
  students: [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU",
      name: "Sarah Johnson",
      education: "Bachelor's degree in Computer Science",
      careerGoals: "Aspires to become a full-stack developer",
      experience:
        "Completed internships at leading tech companies, participated in hackathons",
      fundingNeed:
        "Seeking financial support to cover tuition fees and living expenses during the bootcamp",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU",
      name: "John Smith",
      education: "High school graduate with a passion for technology",
      careerGoals: "Aims to transition into a career in software development",
      experience: "Self-taught coder, participated in coding competitions",
      fundingNeed:
        "Requires assistance to afford bootcamp tuition and materials",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU",
      name: "Sarah Johnson",
      education: "Bachelor's degree in Computer Science",
      careerGoals: "Aspires to become a full-stack developer",
      experience:
        "Completed internships at leading tech companies, participated in hackathons",
      fundingNeed:
        "Seeking financial support to cover tuition fees and living expenses during the bootcamp",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU",
      name: "John Smith",
      education: "High school graduate with a passion for technology",
      careerGoals: "Aims to transition into a career in software development",
      experience: "Self-taught coder, participated in coding competitions",
      fundingNeed:
        "Requires assistance to afford bootcamp tuition and materials",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU",
      name: "John Smith",
      education: "High school graduate with a passion for technology",
      careerGoals: "Aims to transition into a career in software development",
      experience: "Self-taught coder, participated in coding competitions",
      fundingNeed:
        "Requires assistance to afford bootcamp tuition and materials",
    },
  ],
};

const WEBDEV: React.FC = () => {
    const [showArrow, setShowArrow] = useState(false);
    const studentProfilesRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const scrollToStudentProfiles = () => {
      studentProfilesRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
        <LandingLayout>
        <div className="flex justify-center items-center h-full ">
          <div className="flex flex-col md:flex-row items-center w-full p-4">
            <div className="md:w-1/3 text-center md:text-left p-4">
              <div className="flex justify-center p-6">
                <h1 className="text-6xl text-gray-500">&lt;&gt;</h1>
              </div>
              <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">
                Website Development
              </h1>
            </div>
      
            <div className="md:w-2/3 p-6">
              <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">
                  Detailed Information about Website Development
                </h2>
                <p className="text-lg mb-4">
                  Website development involves creating, designing, and maintaining websites. It encompasses various aspects such as web design, front-end development, back-end development, and web content management.
                </p>
                <p className="text-lg mb-4">
                  Web developers use various programming languages, frameworks, and tools to build responsive and interactive websites. They ensure that websites are visually appealing, user-friendly, and accessible across different devices and browsers.
                </p>
              </section>
              <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">
                  Overview of Investment Opportunity
                </h2>
                <p className="text-lg mb-4">
                  Investing in students to study website development offers an opportunity to support the next generation of web developers. By providing funding for education in this field, investors can contribute to the growth of the digital economy.
                </p>
                <p className="text-lg mb-4">
                  Web development skills are in high demand in industries such as technology, e-commerce, media, and entertainment. Investing in students' education in this area can lead to rewarding career opportunities and innovation in various sectors.
                </p>
              </section>
            </div>
          </div>
        </div>
        <button
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white px-4 py-2 rounded"
          onClick={scrollToStudentProfiles}
        >
          <FaArrowAltCircleDown />
        </button>
        <section ref={studentProfilesRef} className="h-screen flex justify-center items-center">
          <div className="p-10">
            <div className="flex flex-row justify-center">
              {studentData.students.map((student, index) => (
                <StudentProfileCard key={index} student={student} />
              ))}
            </div>
          </div>
        </section>
        {/* {showArrow && (
              <div
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer bg-white rounded-full p-3 shadow-lg z-10"
                onClick={scrollToStudents}
              >
                {/* Arrow icon *
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a.997.997 0 01-.707-.293l-4-4a.999.999 0 111.414-1.414L10 9.586l3.293-3.293a.999.999 0 111.414 1.414l-4 4A.997.997 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )} */}
      </LandingLayout>
      
    );
  };
  

export default WEBDEV;
