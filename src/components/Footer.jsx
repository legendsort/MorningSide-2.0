import React from "react";

const Footer = () => {

  return (
    <div className=" inner-shadow mt-10 p-10">
      <div className="container md:w-[80%] mx-auto">
        <div className="grid grid-cols-10 ">
          <div className = "col-span-10 flex items-center">
            <img className="my-5 w-[200px] h-[60px] " src="/images/Logo/logo.png" alt="logo" />
          </div>
          <div className = "col-span-4">
            <p className="font-medium my-2">Address</p>
            <p className="text-gray-500 font-medium">Dubai, UAE</p>
          </div>  
          <div className = "col-span-6">
            <p className="font-medium my-2">Contact</p>
            <p className="text-gray-500 font-medium">
              Email:josh@morningside.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
