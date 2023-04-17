import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container flex flex-col justify-center items-center pt-20 md:pt-32">
      <div className=" text-center text-5xl md:text-9xl font-bold text-gray-100 h-[220px] lg:h-[350px]">
        Contact
      </div>
      <h2 className="m-1 text-center text-3xl lg:text-6xl font-extrabold font-['AvenirNextBold'] text-gray-900">
        Let's <span className="text-gray-100">get in</span> touch
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
