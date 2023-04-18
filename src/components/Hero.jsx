import React from "react";import Nova from "./Nova";

const Hero = () => {
  return (
    <div className="">
      <div className="hero flex h-screen flex-col items-center justify-center lg:mr-44 xl:text-5xl ">
        <div >
          <Nova />
        </div>
        <div className="mx-5">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="hero-title font-['AvenirNextBold'] text-4xl font-extrabold text-main-color md:text-7xl xl:text-9xl"
          >
            Morningside AI
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="300"
            className="mt-2 w-2/3 font-['AvenirNextLight'] text-sm font-light text-main-color lg:text-3xl xl:mt-10"
          >
            Empower Your Business with Cutting-Edge AI Solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
