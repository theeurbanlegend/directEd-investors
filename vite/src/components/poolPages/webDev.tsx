import React, { useRef } from "react";
import LandingLayout from "../portfolio/layout";
import StudentProfileCard from "../students/StudentProfileCard";
import { useQuery } from "react-query";
import { getStudents } from "../../api/requests/getStudents";
import { FaArrowAltCircleDown } from "react-icons/fa";

const WEBDEV: React.FC = () => {
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
      <div className="flex flex-col justify-center items-center w-full"> {/* Changed line */}
        <div className="flex flex-col md:flex-row items-center w-full p-4" ref={detailsRef}>
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
              <h2 className="text-2xl font-bold mb-4 text-center">Website Development</h2>
              <p className="text-lg mb-4 text-center">
                Website development involves creating, designing, and maintaining websites. It
                encompasses various aspects such as web design, front-end development, back-end
                development, and web content management.
              </p>
            </section>

            <section className="my-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Investment Opportunity</h2>
              <p className="text-lg mb-4">
                Investing in students to study website development offers an opportunity to support
                the next generation of web developers. By providing funding for education in this
                field, investors can contribute to the growth of the digital economy.
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

      <section ref={profilesRef} className="w-full flex justify-center items-center mt-10"> {/* Changed line */}
        <div className="p-10 w-full"> {/* Changed line */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Changed line */}
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

export default WEBDEV;
