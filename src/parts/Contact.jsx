import React from "react";import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container flex flex-col justify-center items-centr pt-20 md:pt-32">
      <div className="text-center text-5xl md:text-9xl font-bold text-gray-100">
        Contact
      </div>
      <h2 className="pt-20 m-1 text-center text-4xl font-extrabold tracking-tight text-gray-900">
        Let's <span className="text-gray-100">get in</span> touch
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
