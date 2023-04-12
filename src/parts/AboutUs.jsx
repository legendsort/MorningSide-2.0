const About = () => {
  const imagePath = "/images/Photos/Website/features.jpeg";

  return (
    <div className="grid grid-cols-2 container flex items-center pt-32 pb-32">
      <div className="col-span-2 md:col-span-1 container">
        <div className="md:mr-10 pl-3 md:pl-10">
          <p className="text-primary font-medium text-xl my-5 uppercase">
            // About Us
          </p>
          <h2 className="text-primary text-4xl mb-5 leading-none">
            Empower Your Business with Cutting-Edge AI Solutions
          </h2>
          <p className="text-primary font-medium text-md my-5">
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
      <div className="col-span-2 md:col-span-1 p-5 md:p-10">
        <img src={imagePath} className="max-h-[300px]" alt="AboutUs" />
      </div>
    </div>
  );
};

export default About;
