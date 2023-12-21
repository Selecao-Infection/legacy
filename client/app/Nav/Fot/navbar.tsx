import React from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Header = () => {
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <header className="bg-transparent">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <h1 className="font-bold text-violet-700 text-sm sm:text-xl flex flex-wrap cursor-pointer">
        .SHOP
      </h1>
      <form className="bg-transparent border  rounded-full p-2 flex items-center">
      <button>
          <FaSearch className="text-white mr-3 " />
        </button>
        <input
          type="text"
          placeholder="Search items, Fashion Collections and users"
          className="bg-transparent text-white focus:outline-none w-40 sm:w-64 "
        />
        
      </form>
      <ul className="flex gap-7 items-center">
        <Link href="/" className="hidden sm:inline text-white hover:underline">
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
          href="/admin"
          className="hidden sm:inline text-white hover:underline"
        >
          Dashboard
        </Link>
        <Link href="/" className="hidden sm:inline text-white hover:underline">
          FAQ
        </Link>
        <Link href="/basket">
          <FaCartShopping className="text-white" />
        </Link>
        <li>
        
            <div className="flex gap-4 items-center">
              {/* <RiLogoutBoxRLine */}
              
            {/* className="text-white h-9 cursor-pointer" />  */}
              <img
                // onClick={() => {
                //   navigate("/profile");
                // }}
                className="rounded-full h-7 w-7 object-cover"
                src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                alt="profile"
              />
            </div>
                <p
             
              className="ml-4 text-violet-400 font-semibold cursor-pointer hover:underline"
            >
              {/* Sign In */}
            </p>
         
        </li>
      </ul>
    </div>
  </header>
  );
};

export default Header;
