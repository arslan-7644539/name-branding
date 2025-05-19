import React from "react";
import { MainLogo } from "./svgs/svg";
import { FaShoppingBag } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
// ------------------------------------------------
const offerNow = (
  <>
    <div className="w-full h-6 bg-black flex items-center justify-center">
      <p className="text-white p-8 text-[12px]">
        🚚 Free Shipping Nationwide! | 🎁 Get PKR 300 OFF on First Order – Use
        Code: FLAT300
      </p>
    </div>
  </>
);

const TopHeader = (
  <>
    <div className="w-full h-20  flex flex-row items-center justify-between gap-2 p-3 ">
      {/* brand logo */}
      <div>
        <MainLogo className="ml-2" />
      </div>
      {/* search bar and categery */}

      <div className="relative w-full md:w-1/2 flex">
        {/* Category dropdown */}
        <div className="relative">
          <select className="h-full px-3 py-2 bg-[#F5F5F5] border border-gray-300 rounded-l-md outline-none text-gray-500">
            <option>All</option>
            <option>Women</option>
            <option>Men</option>
            <option>Kids</option>
          </select>
        </div>

        {/* Search input */}
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <LuSearch className="text-gray-500 text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search fashion"
            className="w-full h-full pl-10 pr-4 border border-gray-300 border-l-0 rounded-r-md focus:outline-none text-gray-500 bg-[#F5F5F5]"
          />
        </div>
      </div>
      {/* currency and shoping bag's */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col  items-center gap-0 ">
          <p className="p-2 text-[12px] text-[#737373] font-semibold mt-2 ">
            Deliver To / Currency
          </p>

          <div className="flex flex-row items-center gap-1.5">
            <img
              src="	https://hatscripts.github.io/circle-flags/flags/pk.svg"
              alt="Pakistan Flag"
              className="w-5 h-5"
            />
            {/* Currency Selector */}
            <select className="px-3 py-1 text-sm focus:outline-none">
              <option>PK / PKR</option>
              <option>US / USD</option>
              <option>IN / INR</option>
            </select>
          </div>
        </div>
        {/* Cart Icon */}
        <button className="relative">
          <FaShoppingBag className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span>
        </button>
      </div>
    </div>
  </>
);

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-0 ">
        {/* today offers */}
        {offerNow}

        {/* ---------- */}

        {/* main header */}
        {TopHeader}

        <div className="border-b-[1px] border-gray-300"></div>
      </div>
    </>
  );
};

export default Header;
