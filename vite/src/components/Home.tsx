import React from "react";
import Navbar from "./Navbar";
import StudentProfileCard from "./students/StudentProfileCard";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const studentData = {
    students: [
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU',
            name: "Sarah Johnson",
            education: "Bachelor's degree in Computer Science",
            careerGoals: "Aspires to become a full-stack developer",
            experience: "Completed internships at leading tech companies, participated in hackathons",
            fundingNeed: "Seeking financial support to cover tuition fees and living expenses during the bootcamp",
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ooJmIA9DMZvBPgm0c9mh4At24wCqsCUJe-p7c3-jQ-6WkT2lsAa7ntOPYQpJ8CMEmaw&usqp=CAU',
            name: "John Smith",
            education: "High school graduate with a passion for technology",
            careerGoals: "Aims to transition into a career in software development",
            experience: "Self-taught coder, participated in coding competitions",
            fundingNeed: "Requires assistance to afford bootcamp tuition and materials",
        },
    ],
};

const Home = () => {
    return (
        <>
            <Navbar />

            <main className="flex justify-center mt-10">
                <section className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">Welcome to DirectEd Development</h1>
                    <p className="text-lg mb-8">
                        DirectEd Development (DirectEd) is a non-profit organization working to bridge the digital skills gap in Africa. We provide tuition-free, world-class training in foundational digital skills, web development, and frontier technologies like Artificial Intelligence, Quantum Computing, Blockchain, and Cybersecurity. Our highly selective, rigorous 1-year-long program prepares students for careers in the most sought-after digital skills on the market. We uniquely provide guaranteed internships with Western tech startups and a monthly stipend to cover living expenses!
                    </p>

                    <h2 className="text-2xl font-bold mb-4">Empowering the Future Workforce</h2>
                    <p className="text-lg mb-8">
                        By equipping students with in-demand digital skills, DirectEd empowers them to contribute to Africa's technological and economic growth. Our graduates are prepared to excel in various tech fields, fostering innovation and creating a more competitive workforce.
                    </p>
                    <h1 className="text-xl font-bold mb-4">Overview of some students profiles</h1>
                    <div className="p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {studentData.students.map((student, index) => (
                                <StudentProfileCard key={index} student={student} />
                            ))}
                        </div>
                    </div>
                    <div className="px-4 py-5 sm:px-6 flex justify-center">
                        <Link to="/investments" className="relative px-6 py-3 bg-[#395241] text-white rounded overflow-hidden focus:outline-none group hover:rainbow-border">
                            Invest in the Future
                            <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 mix-blend-multiply"></span>
                            <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 mix-blend-multiply"></span>
                            <span className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-red-500 via-yellow-500 to-purple-500 mix-blend-multiply"></span>
                            <span className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-red-500 via-yellow-500 to-purple-500 mix-blend-multiply"></span>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default Home;
