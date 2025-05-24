import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";

const WhyChooseUs = () => {
  return (
    <section className="lg:mt-24 mt-6  p-5 lg:mr-44  flex flex-col lg:flex-row items-center justify-center relative">
      {/* Main Content */}
      <main className="flex flex-col gap-5 md:p-6 rounded-lg  z-10   relative lg:-right-32">
        <div
          data-aos="fade-up"
          className="border-[#056FC5] bg-white border-2 p-4 rounded-md flex flex-col gap-2"
        >
          <div className="flex items-end">
            <div className="bg-[#056FC533] text-[#056FC5] p-3 font-bold rounded-lg text-base gap-3 flex items-center">
              <AiOutlineLike className="text-[#056FC5] font-bold text-xl" />
              <p>Why choose us</p>
            </div>
          </div>
          <p className="md:text-3xl text-2xl font-bold text-[#032759]">
            VY is Built on Trust, Driven by{" "}
            <span className="text-[#056FC5]">Quality</span>.
          </p>
        </div>

        <div data-aos="fade-left" className="relative z-0  md:hidden">
          <Image src="/why.png" alt="Why Choose Us" width={570} height={500} />
        </div>

        <ul
          data-aos="fade-right"
          className="font-bold text-xl flex flex-col gap-2 list-none pl-6"
        >
          <li className="relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#1f4f11] before:absolute before:left-[-1rem] before:top-1/2 before:transform before:-translate-y-1/2">
            Free Consultations
          </li>
          <li className="relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#1f4f11] before:absolute before:left-[-1rem] before:top-1/2 before:transform before:-translate-y-1/2">
            Exceeded Expectations
          </li>
          <li className="relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#1f4f11] before:absolute before:left-[-1rem] before:top-1/2 before:transform before:-translate-y-1/2">
            Licensed & Insured
          </li>
          <li className="relative before:content-[''] before:block before:w-2 before:h-2 before:bg-[#1f4f11] before:absolute before:left-[-1rem] before:top-1/2 before:transform before:-translate-y-1/2">
            High-Quality Results
          </li>
        </ul>

        <div data-aos="fade-right" className="flex w-full md:items-start">
          <Link
            href="/contact"
            className="flex flex-row w-full lg:w-fit justify-between lg:justify-start items-center lg:gap-24 bg-[#056FC5] p-2 text-white rounded-lg lg:text-xl"
          >
            <p>Contact us</p>
            <GoArrowRight className="text-2xl lg:text-4xl" />
          </Link>
        </div>
      </main>

      {/* Image Section */}
      <div data-aos="fade-left" className="relative z-0 hidden md:flex">
        <Image src="/why.png" alt="Why Choose Us" width={570} height={500} />
      </div>
    </section>
  );
};

export default WhyChooseUs;
