import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [status, setStatus] = useState("Send");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(
        "service_4lc63o8",
        "template_upd8p7b",
        form.current,
        "WpcdHKXte2Drc_Q_u"
      )
      .then(
        (result) => {
          form.current.reset();
          toast.success("Email sent successfully!"); // Show success toast notification
          setStatus("Send");
        },
        (error) => {
          toast.error("There was an error sending the email."); // Show error toast notification
          setStatus("Send");
        }
      );
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 md:w-[60%] md:mx-auto">
        <div className="py-8 lg:py-16 px-4 mx-auto full">
          <form
            ref={form}
            action="#"
            className="space-y-5 text-base md:text-lg font-['RobotoRegular']"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-5 ">
              <div className="border-b border-gray-300 md:w-1/2">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1  leading-tight focus:outline-none"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="border-b border-gray-300 md:w-1/2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1  leading-tight focus:outline-none"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="border-b border-gray-300 ">
              <textarea
                type="text"
                id="message"
                name="message"
                rows={6}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1  leading-tight focus:outline-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="flex justify-center pt-5">
              <button
                className="border-2 px-10 py-2 text-gray-500"
                disabled={status === "Sending..."}
              >
                {status}
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
