// "use client"
// import { useState } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header
//       className="w-full max-w-[884.67px] h-auto min-h-[85.5px] bg-[#FFFCF8] mx-auto flex flex-col md:flex-row md:items-center justify-between px-4 py-3 md:py-0 relative"
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-between">
//         <div className="font-bold text-xl">Sowears</div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 mt-4 md:mt-0 text-xs font-medium w-full md:w-auto`}>
//         <a href="#" className="hover:underline">HOME</a>
//         <a href="#" className="hover:underline">BEST-SELLERS</a>
//         <a href="#" className="hover:underline">NEW ARRIVALS</a>
//         <a href="#" className="hover:underline">CO-ORDS</a>
//         <a href="#" className="hover:underline">SUMMER</a>
//         <a href="#" className="hover:underline">SHIRTS</a>
//       </nav>

//       {/* Account and Cart */}
//       <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center space-x-4 mt-4 md:mt-0`}>
//         <button aria-label="Account">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//           </svg>
//         </button>
//         <button aria-label="Shopping cart">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <div className=" container mx-auto w-full h-[85.5px] bg-[#FFFCF8] px-[30px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-5">
          <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
          <SlEnvolopeLetter className="w-6 h-6 cursor-pointer" />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://sowears.net/cdn/shop/files/sowears_logo_only_name_grey_165x@2x.png?v=1737857479"
            alt="logo"
            className="w-[200px] h-[70px] object-contain"
          />
        </div>

        <div className="flex items-center gap-5">
          <FaUserCircle className="w-6 h-6 cursor-pointer" />
          <IoMdSearch className="w-6 h-6 cursor-pointer" />
          <MdOutlineShoppingBag className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
