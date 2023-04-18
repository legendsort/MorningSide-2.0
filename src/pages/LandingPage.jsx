import React from "react";
import Hero from "../components/Hero";
import Services from "../parts/Services";
import About from "../parts/About";
import AboutUs from "../parts/AboutUs";
import Team from "../parts/Team";
import Blog from "../parts/Blog";
import Contact from "../parts/Contact";

import Aos from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  Aos.init();

  return (
    <div>
      <Hero />
      <AboutUs />
      <About />
      <Services />
      <Team />
      <Contact />
    </div>
  );
};

export default LandingPage;
