import React from "react";const Footer = () => {
  return (
    <div className="container mt-10 pt-10 font-['Inter']">
      <div className="mx-auto">
        <div className="grid grid-cols-4 pb-8">
          <div className="col-span-4 flex items-center">
            <img
              className="my-5 h-[60px] w-[200px] "
              src="/images/Logo/logo.png"
              alt="logo"
            />
          </div>
          <div className="col-span-4 md:col-span-2 pb-6">
            <div className="flex flex-col max-w-[460px] ">
              <h3 className="pb-6 text-base font-semibold">
                Join our newsletter
              </h3>
              <div className="flex flex-row gap-x-3 pb-6">
                <input
                  placeholder="Email address"
                  className="email-input rounded-1 border-black p-[13px] w-[241px] md:w-[341px]"
                />
                <input
                  type="button"
                  className="btn normal-btn border-btn"
                  value="Subscribe"
                />
              </div>
              <p className="text-xs font-normal text-[#4D5761]">
                Gain a competitive edge with the latest AI breakthroughs and
                updates - all in a 5 minute email. Our AI experts sift through
                the clutter, honing in on the news that truly matters.
              </p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 flex flex-row gap-x-8">
            <div className="flex md:w-1/2 ">
              <div className="flex flex-col ">
                <div className="my-2 font-semibold">Address</div>
                <div className="font-normal text-[#6B7280]">Dubai, UAE</div>
              </div>
            </div>
            <div className="md:w-1/2">
              <p className="my-2 font-semibold">Contact</p>
              <p className="font-normal text-[#6B7280]">
                Email:josh@morningside.ai
              </p>
            </div>
          </div>
        </div>
        <hr className="col-span-2"></hr>
        <div className="grid grid-cols-2 justify-between text-sm py-8 items-center gap-y-3">
          <div className="col-span-2 md:col-span-1 text-[#4D5761]">©Morningside AI</div>
          <div className="col-span-2 md:col-span-1 flex flex-row justify-end gap-x-6 text-main-color">
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Cookie Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
