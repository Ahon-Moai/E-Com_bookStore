import React from "react";
import logoPNG from "../assets/logo.png";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <>
      <div className="w-full h-full font-poppins">
        <div className="max-w-[1280px] mx-auto py-3 shadow-2xl">
          <div className="flex justify-between ">
            <img className="h-[60px]" src={logoPNG} alt="logo" />
            <div className="hidden sm:flex justify-between text-center gap-5 mt-3 text-[18px] text-slate-500  ">
              <p>Home</p>
              <p>About</p>
              <p>Page</p>
              <p>Shop</p>
              <p>Articles</p>
              <p>Contact</p>
            </div>
            <div className="flex mr-3 sm:mt-4 gap-2">
              <CiUser size={25} className=" mt-4" />
              <CiShoppingCart size={25} className=" mt-4" />
              <CiSearch size={25} className=" mt-4" />
              <CiMenuBurger size={22} className="sm:hidden mt-4 mr-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
