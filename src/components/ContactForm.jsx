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
      <div className="bg-white dark:bg-gray-900 lg:mx-auto lg:w-[60%]">
        <div className="full mx-auto px-4 py-8 lg:py-16">
          <form
            ref={form}
            action="#"
            className="min-w-[250px] space-y-5 font-['RobotoRegular'] text-sm md:text-lg"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-5 md:flex-row ">
              <div className="border-b border-gray-300 md:w-1/2">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mr-3 w-full appearance-none border-none bg-transparent py-1 leading-tight  text-gray-700 focus:outline-none"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="border-b border-gray-300 md:w-1/2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mr-3 w-full appearance-none border-none bg-transparent py-1 leading-tight  text-gray-700 focus:outline-none"
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
                className="mr-3 w-full appearance-none border-none bg-transparent py-1 leading-tight  text-gray-700 focus:outline-none"
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
