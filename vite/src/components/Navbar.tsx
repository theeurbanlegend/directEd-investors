import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

type LinkType = {
    label: string;
    href: string;
};

const links: LinkType[] = [
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
        <>
            <nav className="flex items-center justify-between py-6 px-6  md:px-14 xl:px-24 w-full z-50">
                <div className="flex items-center justify-start">
                    <a href="/" className="font-bold md:text-2xl">
                        <img src="/images/directEd-horizontal.png" width={'200px'} alt="DirectEd logo" />
                    </a>
                </div>
                {/* Navigation Links aligned to the right */}
                <div className="md:flex hidden items-center border rounded-lg border-primary/50 gap-8 px-10 py-3 bg-primary/10">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="relative text-sm font-normal"
                        >
                            {link.label}
                            {/* Underline Animation */}
                            <span className="absolute left-0 text-black bottom-0 w-full h-1 bg-primary transition-transform duration-300 transform translate-x-full origin-left"></span>
                        </Link>
                    ))}
                    {/* <button>
                        <Link to="/login">Sign in</Link>
                    </button> */}
                </div>
                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex flex-1 justify-end items-center gap-4">
                    <HamburgerMenuIcon onClick={() => setToggle(!toggle)} />
                    <button>
                        <Link to="/auth/signin">Sign in</Link>
                    </button>
                    {/* Sidebar for Mobile */}
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 bg-slate-700 absolute top-[60px] right-[40px] mx-4 my-2 min-w-[180px] rounded-lg sidebar`}
                    >
                        <ul className="list-none flex justify-start items-start flex-1 flex-col">
                            {links.map((nav, index) => (
                                <li
                                    key={nav.label}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] "text-dimWhite" ${
                                        index === links.length - 1 ? "mb-0" : "mb-4"
                                    }`}
                                >
                                    <a href={nav.href}>{nav.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <hr className="w-full border-b border-gray-300" />
        </>
    );
};

export default Navbar;
