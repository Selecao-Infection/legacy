"use client";
import { RxAvatar } from "react-icons/rx";
import { IoLogOutSharp } from "react-icons/io5";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
// import { RiLogoutBoxRLine } from "react-icons/ri";
// import Logo  from '../../../assets/Logo.png'
import { jwtDecode } from "jwt-decode";
// import { link } from "fs";
// import "../globals.css"
const Header = () => {
  const [current, setCurrent] = useState<any>();
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("current") as string)) {
      setCurrent(
        jwtDecode(JSON.parse(window.localStorage.getItem("current") as string))
      );
    }
  }, []);

  console.log(current);

  return (
    <header className="bg-transparent">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-violet-700 text-sm sm:text-xl flex flex-wrap cursor-pointer">
          <img className="w-14 h-14" src="https://i.imgur.com/M0WPVKZ.png" />
        </h1>
        <form className="bg-transparent border  rounded-full p-2 flex items-center">
          <input
            type="text"
            placeholder="Search items, Fashion Collections and users"
            className="bg-transparent text-white focus:outline-none w-30 sm:w-64 "
          />
          <button>
            <FaSearch className="text-white" />
          </button>
        </form>
        <ul className="flex gap-7 items-center">
          <Link
            href="/home"
            className="hidden sm:inline text-white hover:underline"
          >
            Home
          </Link>
          <Link
            href="/all-products"
            className="hidden sm:inline text-white hover:underline"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="hidden sm:inline text-white hover:underline"
          >
            About
          </Link>
          <Link
            href="/Dashboard"
            className="hidden sm:inline text-white hover:underline"
          >
            Dashboard
          </Link>
          <Link
            href="/faq"
            className="hidden sm:inline text-white hover:underline"
          >
            FAQ
          </Link>
          <Link href="/basket">
            <FaCartShopping className="text-white" />
          </Link>
          <li>
            <div className="flex gap-4 items-center">
             {current ? <Link href="/home" className="hidden sm:inline">
                <div className="flex flex-wrap gap-4">
                  <img
                    className="rounded-full h-7 w-7 object-cover"
                    src={current.pdp}
                    alt="profile"
                  />
                  <div
                    className="flex flex-col"
                    onClick={() => window.localStorage.clear()}
                  >
                    <IoLogOutSharp className="text-[30px]" />
                    <button className="text-[10px]">logout</button>
                  </div>
                </div>
              </Link>
              :
              <Link href="/auth/signin">
                <div className="flex flex-col">
                  <RxAvatar className="text-[30px]" />
                  <button className="text-[10px]">Login in</button>
                </div>
              </Link>}
            </div>
            <div className="ml-4 text-violet-400 font-semibold cursor-pointer hover:underline">
              {/* Sign In */}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
