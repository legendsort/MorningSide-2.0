import { useEffect } from "react";

const About = () => {
  const leftImage = "/images/avatar.png";

  useEffect(() => {
    const image = document.getElementById("image");
    const paragraph = document.getElementById("paragraph");
  
    // Set initial height of image to match paragraph
    image.style.height = `${paragraph.offsetHeight}px`;

  });
  return (
    <div className="text-mainf container flex flex-col md:flex-row items-center justify-center pt-10 lg:pt-32">
      <div className="p-2 mr-5 box-shadow" >
        <img src={leftImage} id="image" className="h-auto" alt="AboutUs" />
      </div>
      <div id="paragraph" className="w-full md:max-w-[300px] lg:max-w-[600px]">
        <div className="p-3">
          <p className="text-base font-medium uppercase text-blue-400 lg:text-lg font-['Kruda']">
            About Us
          </p>

          <p className="my-5  text-justify font-['RobotoRegular'] text-base font-medium text-sub-color lg:text-lg ">
            MorningSide AI is your full-cycle AI development partner, from
            concept to production and beyond. We're not just machine learning
            specialists, we're the team that helps startups and enterprises
            create cutting-edge AI products that optimize efficiency and
            accelerate growth. Led by founder Liam Ottley, we guide you through
            the entire process and shape your ideas into ready-to-go solutions.
            With our expertise across multiple industries, we'll help you build
            an innovative product that fosters your company's success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
