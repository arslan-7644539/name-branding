import Sidebarnavigation from "@/components/Sidebar-navigation";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto flex flex-row">
        <Sidebarnavigation />

        <div className="w-full">page</div>
      </div>
    </>
  );
};

export default page;
