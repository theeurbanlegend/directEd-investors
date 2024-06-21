"use client";

import { Badge } from "@tremor/react";
import Title from "../common/Title";
import { Button } from "../common/button";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
    return (
        <motion.div
            className="w-full flex items-center justify-start flex-col overflow-hidden relative mb-[100px] z-50"
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            <Navbar />
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full my-[40px] md:my-[80px] sm:my-[100px] px-4 md:px-14 xl:px-24 min-h-[50vh]">
                <div className="flex flex-col items-center lg:items-start gap-6 lg:text-left text-center">
                    <Badge className="py-1 border rounded-lg">
                        <p className="text-primary font-normal">Take part in the future</p>
                    </Badge>
                    <Title className="text-3xl md:text-6xl">
                        Empowering the Future Workforce
                    </Title>
                    <h2 className="md:text-lg">
                        By equipping students with in-demand digital skills, DirectEd empowers them to contribute to Africa's {" "}
                        technological and economic growth.
                    </h2>
                    <div className="flex items-center justify-start gap-8 md:flex-row flex-col">
                        <Button>
                            <Link to="/login">Invest now</Link>
                        </Button>
                    </div>
                </div>
                <div className="w-[100%] md:w-[80%] lg:w-[50%] flex gap-4 items-center relative lg:flex-row flex-col">
                    <div className="lg:w-[50%] z-10 w-[100%]">
                        <img src="/Raay.jpg" alt="Chart" className="w-full border-4 border-solid border-gray-300 shadow-xl rounded-lg" />
                    </div>
                    <div className="w-[50%] hidden flex-row lg:flex-col gap-4 lg:flex">
                        <img src="/Raay.jpg" alt="Sales 1" className="w-full border-4 border-solid border-gray-300 shadow-xl rounded-lg" />
                        <img src="/Raay.jpg" alt="Sales 2" className="w-full border-4 border-solid border-gray-300 shadow-xl rounded-lg" />
                    </div>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default Header;
