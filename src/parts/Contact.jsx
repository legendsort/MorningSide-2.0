import React from "react";import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container flex flex-col items-center justify-center pt-20 md:pt-32">
      <div
        className=" h-[170px] text-center text-5xl font-bold text-gray-100 md:text-9xl lg:h-[450px]"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        Contact
      </div>
      <h2 className="m-1 text-center font-['AvenirNextBold'] text-3xl font-extrabold text-gray-900 lg:text-6xl">
        Let's <span className="text-gray-100">get in</span> touch
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
