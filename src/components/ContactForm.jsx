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
    let a = false;
    if (Math.random() < 0.8) a = true;
    const formData = new FormData(form.current);
    const data = {
      subject: formData.get("subject"),
      email: formData.get("email"),
      message: formData.get("message"),
      budget: formData.get("budget"),
    };

    emailjs.send(
      "service_839tvkd",
      "template_upd8p7b",
      data,
      "WpcdHKXte2Drc_Q_u"
    );

    emailjs
      .send(
        "service_839tvkd",
        "template_wsj7vpd",
        {
          ...data,
          // sent: a ? "Sent to them" : "Just me",
        },
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
      <div className="bg-white text-gray-400 lg:mx-auto lg:w-[50%]">
        <div className="full mx-auto px-4 py-8 lg:py-16">
          <form
            ref={form}
            action="#"
            className="min-w-[250px] space-y-5 font-['Inter'] text-base text-gray-400 md:text-lg "
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-5 pb-5 md:flex-row">
              <div className="border-b border-gray-300 md:w-1/2">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mr-3 w-full appearance-none border-none bg-transparent py-1 leading-tight  focus:outline-none"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="border-b border-gray-300 md:w-1/2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mr-3 w-full appearance-none border-none bg-transparent py-1 leading-tight focus:outline-none"
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
                className="mr-3 w-full appearance-none border-none bg-transparent py-1 leading-tight  focus:outline-none"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            <div className="relative border-b border-gray-300">
              <label className="mb-3 text-gray-400" htmlFor="grid-state">
                What is you budget for this project
              </label>
              <div className="text-gray-400">
                <select
                  className="block w-full appearance-none border-b border-gray-200 pr-8 pt-3 leading-tight focus:outline-none"
                  id="budget"
                  name="budget"
                >
                  <option value="less than $5,000"> less than $5,000 </option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                  <option value="$20,000 - $40,000">$20,000 - $40,000</option>
                  <option value="$40,000+">$40,000+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 top-7 flex items-center text-gray-700">
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-5">
              <button
                className="btn orange-btn"
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
