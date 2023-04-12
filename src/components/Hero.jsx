import React from "react";
const Hero = () => {
  return (
    <div className="hero md:pt-[330px] h-screen">
      <div className="container">
        <div className="z-2">
          <h2 className="text-primary text-3xl lg:text-4xl xl:text-5xl font-black mb-5 leading-none tracking[-0.1875]">
            Artificial Intelligence
          </h2>
          <h1 className="text-primary text-4xl lg:text-5xl xl:text-6xl font-black leading-80 tracking[-0.1875]">
            Studio
          </h1>
          <p className="text-primary font-medium text-lg md:text-xl mt-5">
            Empower Your Business with Cutting-Edge AI Solutions
          </p>
          <div className="flex flex-col md:flex-row mt-[85px] md:mt-[35px] gap-5">
            <a href="#services" className="theme-btn">
              Service we provide <i className="fas fa-arrow-right"></i>
            </a>
            <a href="/contact" className="theme-btn minimal-btn">
              Let's Chat <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Hero;
