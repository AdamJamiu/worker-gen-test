"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEstimationRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_6gs5319",
        "template_0lzto0f",
        { phone },
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
    <section className="relative bg-home_hero min-h-screen h-full bg-no-repeat bg-cover flex flex-col justify-center items-center">
      {/* <div className="absolute inset-0 bg-black opacity-5"></div> */}
      <div className="relative z-10 flex flex-col items-center gap-4 lg:gap-7 mt-8 md:mt-0 md:py-10 justify-center text-center container max-w-4xl">
        <h1
          data-aos="fade-up"
          className="lg:text-7xl md:text-5xl text-3xl text-white font-semibold"
        >
          Lamb Medical Aesthetics
        </h1>
        <p
          data-aos="fade-up"
          className="text-2xl text-white leading-relaxed lg:block hidden"
        >
          At Lamb Medical, we know your time is valuable. That’s why we offer
          personalized, concierge-style care, giving you direct access to your
          doctor and the attention you deserve.
        </p>
        <p
          data-aos="fade-up"
          className="text-white leading-loose block lg:hidden"
        >
          At Lamb Medical, we know your time is valuable. That’s why we offer
          personalized, concierge-style care, giving you direct access to your
          doctor and the attention you deserve.
        </p>

        <div className="flex mx-auto self-center h-max justify-center items-center gap-3">
          <Link href="#">
            <button className="font-medium text-white h-12 w-32 rounded bg-primary transition hover:opacity-70">
              Gift Cards
            </button>
          </Link>
          <Link href="#">
            <button className="font-medium bg-white h-12 w-32 rounded text-primary transition hover:opacity-70">
              Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
