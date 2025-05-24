"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const HeroCard = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEstimationRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_6gs5319",
        "template_0lzto0f",
        { phone, name: "Website Bot" },
        "apQJg2DtjcCfWOzGP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setPhone("");
          toast.success("Request sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-7 mt-8 md:mt-0 md:py-10 lg:px-20 xl:px-44 justify-center text-center container w-full mx-auto">
      <div data-aos="fade-top" className="">
        <h1 className="lg:text-7xl md:text-5xl text-3xl text-[#032759] font-bricolage font-bold aos-init aos-animate">
          Wood Rot Repair Experts in the{" "}
          <span className="text-[#056FC5]">East Bay CA</span>
        </h1>
      </div>
      <form
        onSubmit={sendEstimationRequest}
        className="lg:w-3/4 w-full bg-white rounded-md mt-10"
      >
        <div className="relative w- ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4  text-sm text-gray-900  border-gray-300 rounded-xl"
            placeholder="Enter your phone number"
          />
          <button
            disabled={loading}
            type="submit"
            className="disabled:opacity-50 ease transition-all duration-300 text-white absolute end-2.5 bottom-2.5 bg-[#056FC5]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-xs md:text-sm md:px-4 px-2 py-2 "
          >
            Get a free estimate
          </button>
        </div>
      </form>

      <img src={"/rot.png"} alt="city" className="rounded-xl" />

      <div data-aos="fade-top" className="mt-14 md:block hidden">
        <h1 className="md:text-3xl text-xl text-[#032759] font-bricolage font-bold">
          Restore Your Home’s Strength & Beauty
        </h1>

        <p className="lg:text-xl md:text-lg text-base text-[#323232] font-medium mt-4">
          At VY Construction, we understand that it's important for your home to
          look its best. That's why our team consists of experienced
          professionals who are committed to providing quality services. We
          strive to make sure that your home is attractive and well-maintained,
          with exterior repairs, deck repairs, new deck builds, siding and
          gutter guard installation.
        </p>
      </div>
      <div className="mt-14 md:hidden block">
        <h1 className="md:text-3xl text-xl text-[#032759] font-bricolage font-bold">
          Restore Your Home’s Strength & Beauty
        </h1>

        <p className="lg:text-xl md:text-lg text-base text-[#323232] font-medium mt-4">
          At VY Construction, we understand that it's important for your home to
          look its best. That's why our team consists of experienced
          professionals who are committed to providing quality services. We
          strive to make sure that your home is attractive and well-maintained,
          with exterior repairs, deck repairs, new deck builds, siding and
          gutter guard installation.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
