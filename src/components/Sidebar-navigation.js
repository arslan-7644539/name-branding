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
      id: 3,
      name: "Kids",
      dropdownIcon: <IoIosArrowDown />,
    },
    {
      id: 4,
      name: "Men",
      dropdownIcon: <IoIosArrowDown />,
    },
    {
        id:5,
        name:"Brands",
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
    {
        
    }
  ];
  return (
    <>
      <div className="container  h-auto max-h-[90vh] w-56 border-r-[1px] border-gray-300 flex flex-col gap-5 items-start p-10 ">
        {sideBar.map((item, i) => (
          <div key={i} className="flex flex-row items-center gap-2">
            <p className="text-[16px] font-semibold">{item.name}</p>
            <p className="text-[14px] ">{item.dropdownIcon}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebarnavigation;
