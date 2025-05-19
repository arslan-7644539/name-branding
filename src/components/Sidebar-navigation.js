import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Sidebarnavigation = () => {
  const sideBar = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Women",
      dropdownIcon: <IoIosArrowDown />,
    },
    {
      id: 4,
      name: "Kids",
      dropdownIcon: <IoIosArrowDown />,
    },
    {
      id: 5,
      name: "Men",
      dropdownIcon: <IoIosArrowDown />,
    },
  ];
  return (
    <>
      <div className="container  h-screen w-56 border-r-[1px] border-gray-300 flex flex-col gap-5 items-start p-5 ">
        {sideBar.map((item, i) => (
          <div key={i} className="flex flex-row items-center gap-2">
            <p className="text-sm font-semibold">{item.name}</p>
            <p className="text-sm font-semibold">{item.dropdownIcon}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebarnavigation;
