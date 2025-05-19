import React from "react";

const page = () => {
  return (
    <div className="container mx-auto w-full h-screen bg-gray-400 ">
      <div className="w-full h-48 "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1011&h=800&dpr=2")`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "1011px",
          height: "800px",
        }}
      ></div>
    </div>
  );
};

export default page;
