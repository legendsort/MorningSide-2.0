import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container flex flex-col justify-center items-center pt-20 md:pt-32">
      <div className="flex flex-col justify-center items-center text-center text-2xl md:text-[16vw] font-bold text-gray-100 h-screen">
        <div>Contacts</div>
      </div>
      <h2 className="pt-20 m-1 text-center text-6xl font-extrabold font-['AvenirNextBold'] text-gray-900">
        Let's <span className="text-gray-100">get in</span> touch
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
