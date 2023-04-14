import React from "react";
import Nova from "./Nova";

const Hero = () => {
  return (
    <div className="hero flex h-screen flex-col items-center justify-center lg:mr-44 xl:text-5xl">
      <div className="mx-5">
        <Nova />
        <h1 className="hero-title font-['AvenirNextBold'] text-3xl font-extrabold text-main-color md:text-7xl xl:text-9xl">
          Morningside AI
        </h1>
        <p className="mt-2 xl:mt-10 font-['RobotoRegular'] text-xs lg:text-lg text-sub-color w-2/3">
          Empower Your Business with Cutting-Edge AI Solutions
        </p>
      </div>
    </div>
  );
};

export default Hero;
