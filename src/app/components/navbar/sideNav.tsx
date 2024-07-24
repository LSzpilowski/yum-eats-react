import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaGoogleWallet } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { MdHelp, MdOutlineFavorite, MdMenuBook } from "react-icons/md";
import Link from "next/link";


interface ISideNavProps {
  sideNav: boolean;
  toggleSideNav: () => void;
}

const Links = [
  {
    url: "/home/menu",
    icon: <MdMenuBook />,
    title: "Menu"
  },
  {
    url: "/home/myAccount",
    icon: <BsPerson />,
    title: "My Account",
  },
  {
    url: "/home/delivery",
    icon: <TbTruckReturn />,
    title: "Delivery",
  },
  {
    url: "/home/myFavourites",
    icon: <MdOutlineFavorite />,
    title: "My Favourite",
  },
  {
    url: "/home/myWallet",
    icon: <FaGoogleWallet />,
    title: "My Wallet",
  },
  {
    url: "/home/help",
    icon: <MdHelp />,
    title: "My Help",
  },
];

function SideNav({ sideNav, toggleSideNav }: ISideNavProps) {
  return (
    <>
      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={toggleSideNav}
        ></div>
      ) : null}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-full md:w-1/5 h-screen bg-white z-20 duration-300 overflow-y-auto"
            : "fixed top-0 left-[-100%] w-1/5 h-screen bg-white z-20 duration-300 overflow-y-auto"
        }
      >
        <AiOutlineClose
          onClick={toggleSideNav}
          size={25}
          className="absolute right-4 top-4 cursor-pointer text-black z-20"
        />
        <Link
          href="/home"
          onClick={toggleSideNav}
          className="w-1/2 p-4 text-4xl flex flex-row justify-center md:justify-start hover:opacity-60"
        >
          <h2 className="text-black">Yum</h2>
          <span className="text-orange-700 font-bold">Eats</span>
        </Link>
        <div className="flex flex-col text-gray-900 mt-5">
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              onClick={toggleSideNav}
              className="w-full flex flex-row items-center gap-3 text-2xl  py-2 px-8 hover:scale-105 ease-in-out duration-300">
              <div
                className="text-white bg-orange-700 rounded-full p-2 inline-block"
              >
                {link.icon}
              </div>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideNav;