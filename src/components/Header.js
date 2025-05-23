import React from "react";
import { LuSearch } from "react-icons/lu";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      {/* Offer Banner */}
      <div className="w-full h-10 bg-black flex items-center justify-center">
        <p className="text-white text-xs font-medium">
          🚚 Free Shipping Nationwide! | 🎁 Get PKR 300 OFF on First Order – Use Code: FLAT300
        </p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  MODIQUE
                </span>
                <span className="text-xs text-gray-500 -mt-1">Apparels</span>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <select className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-l-md text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Categories</option>
                <option>Women</option>
                <option>Men</option>
                <option>Kids</option>
              </select>
              <div className="relative flex-1">
                <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search fashion items..."
                  className="w-full py-3 pl-10 pr-4 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Currency Selector */}
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Deliver To / Currency</p>
              <div className="flex items-center gap-2">
                <img
                  src="https://hatscripts.github.io/circle-flags/flags/pk.svg"
                  alt="Pakistan Flag"
                  className="w-5 h-5"
                />
                <select className="text-sm focus:outline-none">
                  <option>PK / PKR</option>
                  <option>US / USD</option>
                  <option>IN / INR</option>
                </select>
              </div>
            </div>

            {/* Shopping Cart */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FaShoppingBag className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                1
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200"></div>
    </div>
  );
};

export default Header;