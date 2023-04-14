const About = () => {
  const rightImage = "/images/Photos/Website/features.jpeg";
  const leftImage = "/images/avatar.png";
  return (
    <div className="text-mainf container grid grid-cols-3 items-center pt-10 lg:pt-32">
      <div className="col-span-3 flex justify-center p-5 md:col-span-1 md:p-10">
        <img src={leftImage} className=" max-h-[300px] " alt="AboutUs" />
      </div>
      <div className="container col-span-3 md:col-span-1">
        <div className="p-3">
          <p className="my-5 text-lg font-medium uppercase text-green-400">
            About Us
          </p>

          <p className="my-5 font-['RobotoRegular'] text-lg font-medium text-sub-color">
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
      <div className="col-span-3 flex justify-center p-5 md:col-span-1 md:p-10">
        <img src={rightImage} className="max-h-[300px]" alt="AboutUs" />
      </div>
    </div>
  );
};

export default About;
