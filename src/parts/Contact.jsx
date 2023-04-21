import React from "react";import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="container flex flex-col items-center justify-center pt-20 md:pt-32">
      <h2 className="title ">
        Let's get in touch
      </h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
