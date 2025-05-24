"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const GetInTouch = () => {
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    return;

    emailjs
      .send(
        process.env.VITE_SERVICE_ID as string,
        process.env.VITE_TEMPLATE_ID as string,
        formData as any,
        process.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
          toast.success("Request sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="w-full p-5 pb-5 mt-10">
      <div className="w-full mx-auto max-w-6xl flex flex-col md:flex-row gap-7 md:gap-10 lg:gap-20 xl:gap-28">
        <div className="w-full">
          <h1
            data-aos="fade-up"
            className="font-bold text-xl sm:text-2xl md:text-3xl xl:text-5xl py-7 lg:text-4xl text-[#282828] font-rubik"
          >
            Get in touch
          </h1>

          <p
            data-aos="fade-up"
            className="lg:block hidden text-lg leading-loose w-full text-[#8E9BAE]"
          >
            Your care. Your time. Your way. Schedule online and experience the
            personalized, concierge-style medical care you deserve.
          </p>
          <p
            data-aos="fade-up"
            className="md:hidden block text-base leading-loose w-full text-[#8E9BAE]"
          >
            Your care. Your time. Your way. Schedule online and experience the
            personalized, concierge-style medical care you deserve.
          </p>
          {/* <p className="sm:hidden block text-sm leading-normal w-full text-[#8E9BAE]">
            Your care. Your time. Your way. Schedule online and experience the
            personalized, concierge-style medical care you deserve.
          </p> */}

          <img
            src="/location.png"
            alt="location map"
            className="mt-5"
            data-aos="fade-up"
          />
        </div>
        <form
          data-aos="fade-up"
          onSubmit={sendEmail}
          className="w-full space-y-5 font-work_sans"
        >
          <input
            className="px-4 py-3.5 w-full bg-[#FAFAFA] border border-[#0000000A] text-[#8E9BAE] rounded-md"
            placeholder="Name"
            name="name"
          />
          <input
            className="px-4 py-3.5 w-full bg-[#FAFAFA] border border-[#0000000A] text-[#8E9BAE] rounded-md"
            placeholder="Email address"
            type="email"
            name="email"
          />
          <input
            className="px-4 py-3.5 w-full bg-[#FAFAFA] border border-[#0000000A] text-[#8E9BAE] rounded-md"
            placeholder="Desired services"
            name="service"
          />
          <textarea
            rows={4}
            className="px-4 py-3.5 w-full bg-[#FAFAFA] border border-[#0000000A] text-[#8E9BAE] rounded-md"
            placeholder="Message"
            name="service"
          />

          <button className="h-12 w-full bg-primary text-white font-medium font-poppins rounded-md transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
