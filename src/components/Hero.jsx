import React from "react";
import Nova from "./Nova";

const Hero = () => {
  return (
    <div className="hero flex h-screen flex-col items-center justify-center lg:mr-44 xl:text-5xl">
      <div className="mx-5">
        <Nova />
        <h1 className="hero-title font-['AvenirNextBold'] text-4xl font-extrabold text-main-color md:text-7xl xl:text-9xl">
          Morningside AI
        </h1>
        <p className="mt-2 w-2/3 font-['RobotoRegular'] text-base text-sub-color lg:text-lg xl:mt-10 font-semibold">
          Empower Your Business with Cutting-Edge AI Solutions
        </p>
      </div>
    </div>
  );
};

export default Hero;
