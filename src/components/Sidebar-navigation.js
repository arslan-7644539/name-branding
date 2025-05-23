"use client"
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebarnavigation = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const sideBar = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Women",
      hasDropdown: true,
      subItems: [
        { id: 21, name: "Dresses" },
        { id: 22, name: "Tops & Blouses" },
        { id: 23, name: "Pants & Jeans" },
        { id: 24, name: "Skirts" },
        { id: 25, name: "Accessories" },
        { id: 26, name: "Shoes" },
        { id: 27, name: "Bags" },
      ]
    },
    {
      id: 3,
      name: "Kids",
      hasDropdown: true,
      subItems: [
        { id: 31, name: "Boys (2-12 years)" },
        { id: 32, name: "Girls (2-12 years)" },
        { id: 33, name: "Baby (0-2 years)" },
        { id: 34, name: "Toys & Games" },
        { id: 35, name: "School Uniforms" },
      ]
    },
    {
      id: 4,
      name: "Men",
      hasDropdown: true,
      subItems: [
        { id: 41, name: "Shirts" },
        { id: 42, name: "T-Shirts & Polos" },
        { id: 43, name: "Pants & Jeans" },
        { id: 44, name: "Shoes" },
        { id: 45, name: "Accessories" },
        { id: 46, name: "Watches" },
      ]
    },
    {
      id: 5,
      name: "Brands",
    },
    {
      id: 6,
      name: "Top Curations",
    },
    {
      id: 7,
      name: "Orders",
    },
    {
      id: 8,
      name: "Rewards",
    },
  ];

  const toggleDropdown = (itemId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleSubItemClick = (subItem) => {
    console.log("Selected:", subItem.name);
    // Add your navigation logic here
  };

  const handleMainItemClick = (item) => {
    if (!item.hasDropdown) {
      console.log("Selected:", item.name);
      // Add your navigation logic here for non-dropdown items
    }
  };

  return (
    <div className="w-64 h-screen border-r border-gray-200 bg-white flex flex-col sticky top-0 overflow-y-auto">
      <div className="p-6 space-y-2">
        <h2 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
          Categories
        </h2>
        
        {sideBar.map((item) => (
          <div key={item.id} className="space-y-1">
            {/* Main Item */}
            <div 
              className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-all duration-200 group"
              onClick={() => {
                if (item.hasDropdown) {
                  toggleDropdown(item.id);
                } else {
                  handleMainItemClick(item);
                }
              }}
            >
              <span className="text-base font-medium text-gray-800 group-hover:text-gray-900">
                {item.name}
              </span>
              {item.hasDropdown && (
                <div className="transform transition-transform duration-200">
                  {openDropdowns[item.id] ? 
                    <IoIosArrowUp className="w-4 h-4 text-gray-500 group-hover:text-gray-700" /> :
                    <IoIosArrowDown className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                  }
                </div>
              )}
            </div>
            
            {/* Dropdown Content */}
            {item.hasDropdown && openDropdowns[item.id] && (
              <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-300 ease-out">
                {item.subItems?.map((subItem) => (
                  <div 
                    key={subItem.id}
                    className="flex items-center cursor-pointer hover:bg-blue-50 p-2 rounded-md transition-all duration-150 group"
                    onClick={() => handleSubItemClick(subItem)}
                  >
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></div>
                    <span className="text-sm text-gray-600 group-hover:text-blue-600 group-hover:font-medium">
                      {subItem.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Footer Section */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 space-y-1">
            <p>Need Help?</p>
            <p className="text-blue-600 cursor-pointer hover:underline">Contact Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebarnavigation;