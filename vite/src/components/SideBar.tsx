import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { RiBriefcaseLine, RiCoinsLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { IoBulbOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { useUserContext } from '../context/userContext'; // Adjust the import path according to your file structure

const TopLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <RxDashboard />,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: <RiBriefcaseLine />,
  },
  {
    title: "Pools",
    href: "/pools",
    icon: < RiCoinsLine />,
  },
  // {
  //   title: "Analytics",
  //   href: "#",
  //   icon: <IoBulbOutline />,
  // },
];

const BottomLinks = [
  {
    title: "Profile",
    href: "/profile",
    icon: <PersonIcon />,
  },
  {
    title: "Settings",
    href: "#",
    icon: <GearIcon />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const { role } = useUserContext();

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div className="flex flex-col py-3 px-6 h-full w-full justify-between items-start">
      <div className="flex flex-col items-start gap-12 h-full w-full">
        <Link to="/">
          <img src="/images/directEd-horizontal.png" 
            width={'200px'} alt="DirectEd logo"/>
        </Link>
        <div className="flex flex-col items-start gap-6">
          {TopLinks.map((link, index) => (
            <Link to={link.href} key={index} className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer px-4 ${isActiveLink(link.href) ? 'text-[#395241] font-semibold border-l border-[#395241] shadow-md' : ''} 
                hover:shadow-sm`}
              >
                <div>{link.icon}</div>
                <h2 className="md:text-lg">{link.title}</h2>
              </div>
            </Link>
          ))}
          {role === 'admin' && (
            <Link to="/create" className="w-full">
              <div
                className={`flex items-center gap-3 cursor-pointer px-4 ${isActiveLink('/create') ? 'text-[#395241] font-semibold border-l border-[#395241] shadow-md' : ''} 
                hover:shadow-sm`}
              >
                <div><FaPen /></div>
                <h2 className="md:text-lg">Create</h2>
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-6">
        {BottomLinks.map((link, index) => (
          <Link to={link.href} key={index}>
            <div className="flex items-center gap-3 cursor-pointer px-4">
              <div>{link.icon}</div>
              <h2 className="md:text-lg">{link.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
