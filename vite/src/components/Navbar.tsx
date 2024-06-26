import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { ModeToggle } from "../components/common/ThemeToggle";
// import ProfileDropdown from "../components/common/Profile";
// import { User } from "next-auth";
// import { Button } from "../components/ui/Button";
// import { User } from "../types";

type link = {
    label: string;
    href: string;
};

const links: link[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "How it works",
        href: "/#how-it-works",
    },
    {
        label: "Pricing",
        href: "/#pricing",
    },
    {
        label: "FAQs",
        href: "/#faqs",
    },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="flex items-center justify-between py-6 px-6 md:px-14 xl:px-24 w-full z-50">
            <div className="flex items-center justify-start">
                <a href="/" className="font-bold md:text-2xl">
                    <img src="/images/directEd-horizontal.png" width={'200px'} alt="DirectEd logo" />
                </a>
            </div>
            <div className="items-center justify-end md:flex hidden border rounded-lg border-primary/50 gap-8 px-10 py-3 bg-primary/10">
                {links.map((link) => (
                    <Link
                        key={link.label}
                        to={link.href}
                        className="text-sm font-normal"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className="md:flex hidden items-center justify-center gap-6">
                <span className="text-xl font-bold">Investor's Platform</span>
                {/* <ModeToggle /> */}
            </div>
            <div className="md:hidden flex flex-1 justify-end items-center gap-4">
                <HamburgerMenuIcon onClick={() => setToggle(!toggle)} />
                {/* <ModeToggle /> */}
                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-slate-700 absolute top-[60px] right-[40px] mx-4 my-2 min-w-[180px] rounded-lg sidebar`}
                >
                    <ul className="list-none flex justify-start items-start flex-1 flex-col">
                        {links.map((nav, index) => (
                            <li
                                key={nav.label}
                                className={`font-poppins font-medium cursor-pointer text-[16px]
                                    "text-dimWhite"
                                 ${index === links.length - 1 ? "mb-0" : "mb-4"}`}
                            >
                                <a href={nav.href}>{nav.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
