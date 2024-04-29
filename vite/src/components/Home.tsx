"use client";

import { Badge } from "@tremor/react";
import Title from "../common/Title";
import { Button } from "../common/button";
import Navbar from "./Navbar";
import LineChartCard from "./charts/LineChartCard";
import SalesCard from "./charts/SalesCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
            {/* <Gradient className="w-[100%] dark:block hidden" /> */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full mt-[40px] md:mt-[80px] sm:mt-[100px] px-4 md:px-14 xl:px-24 min-h-[50vh]">
                <div className="flex flex-col items-center lg:items-start gap-6 lg:text-left text-center">
                    <Badge className="py-1 border rounded-lg">
                        <p className="text-primary font-normal">Take part in the futre makings</p>
                    </Badge>
                    <Title className="text-4xl md:text-6xl">
                        Empowering the Future Workforce
                    </Title>
                    <h2 className="md:text-lg">
                        By equipping students with in-demand digital skills, DirectEd empowers them to contribute to Africa's {" "}
                        <br className="md:block hidden" />
                        technological and economic growth.
                    </h2>
                    <div className="flex items-center justify-start gap-8 md:flex-row flex-col">
                        <Button>
                            <Link to="/investments">Invest now</Link>
                        </Button>
                    </div>
                </div>
                <div className="w-[100%] md:w-[80%] lg:w-[50%] flex gap-4 items-center relative lg:flex-row flex-col">
                    <div className="lg:w-[50%] z-10 w-[100%]">
                        <LineChartCard />
                    </div>
                    <div className="w-[50%] hidden flex-row lg:flex-col gap-4 lg:flex">
                        <SalesCard />
                        <SalesCard />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;