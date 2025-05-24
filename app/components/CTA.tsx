import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsHouseDoorFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const CTA = () => {
  return (
    <section className="flex flex-col items-center gap-3">
      {/* first section */}
      <div className="lg:grid grid-cols-5 mt- md:mt-24 flex-col p-5 lg:p-0  lg:w-11/12 gap-16 justify-center ">
        <main
          data-aos="fade-right"
          className=" col-span-3 flex flex-col items-center lg:items-start  lg:justify-between  "
        >
          <div className=" flex items-start py-2 lg:py-0  ">
            <div className="flex flex-row items-center text gap-2 font-bold p-2 rounded-lg bg-[#056FC533]    ">
              <BsHouseDoorFill className="text-[#056FC5] text-xl" />
              <p className="text-[#056FC5] ]">Who we are </p>
            </div>
          </div>
          <p className="lg:text-2xl md:text-xl text- text-[#323232] font-medium">
            At VY Construction, we understand that it&apos;s important for your
            home to look its best. That&apos;s why our team consists of
            experienced professionals who are committed to providing quality
            services. We strive to make sure that your home is attractive and
            well-maintained, with exterior repairs, deck repairs, new deck
            builds, siding and gutter guard installation.
          </p>

          <div
            data-aos="fade-left"
            className="col-span-1 flex justify-end lg:hidden py-10"
          >
            <Image
              src={"/house1.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="lg:text-2xl md:text-xl text-[#032759] font-medium">
            <p className="font-bold">We Offer:</p>
            <p className="space-x-20">
              Wood Rot Repair • Termite Damage Repair • Deck Repairs • New Deck
              Builds • Siding • Pergolas and Patio Covers • Gutter Cleaning •
              Gutter Guard Installation
            </p>
          </div>

          <Link
            href={"https://www.facebook.com/Vyconstruction"}
            className="flex flex-row items-center gap-4 py-5 md:py-0 lg:text-xl"
          >
            <p className="border-2  p-0.5 bg-[#056FC5] w-16"></p>
            <p className="text-[#056FC5] ">Follow our social</p>
            <FaFacebook className="text-[#056FC5] text-2xl lg:text-4xl" />
          </Link>
        </main>

        <div
          data-aos="fade-left"
          className="col-span-2 lg:flex justify-end hidden  "
        >
          <Image
            src={"/house1.png"}
            alt="hero"
            width={500}
            height={300}
            quality={100}
            className="object-cover lg:w-[100rem]"
          />
        </div>
      </div>

      {/* section section */}

      <div className="lg:grid grid-cols-5 mt- md:mt-24 flex-col gap-10 p-5 lg:p-0 lg:w-11/12 items-center justify-center ">
        <div
          data-aos="fade-right"
          className="col-span-2 lg:flex justify-start hidden"
        >
          <Image
            src={"/house2.png"}
            alt="hero"
            width={1000}
            height={300}
            quality={100}
            className="object-cover"
          />
        </div>
        <main
          data-aos="fade-left"
          className=" col-span-3 flex flex-col items-center lg:items-start md:gap-6  "
        >
          <div className="lg:text-3xl text- p-3 font-bold text-start bg-white md:p-5 py-3 md:py-5     rounded-md ">
            <p className="space-x-20">
              We specialize in building pergolas and patio covers to give your
              home{" "}
              <span className="text-[#056FC5]">
                a great outdoor living space.
              </span>
            </p>
          </div>

          <div
            data-aos="fade-right"
            className="col-span-1 flex justify-end lg:hidden py-10"
          >
            <Image
              src={"/house2.png"}
              alt="hero"
              width={500}
              height={300}
              quality={100}
              className="object-cover"
            />
          </div>

          <p
            data-aos="fade-left"
            className="lg:text-2xl md:text-xl text- text-[#323232] font-medium"
          >
            With our experience and dedication to providing excellent services,
            you can trust that your home will look its best with VY
            Construction. Contact us today to learn more about our services and
            how we can help you get the most out of your home. We look forward
            to working with you!
          </p>

          <Link
            href={"/about"}
            className="flex flex-row items-center pt-4 gap-4 lg:text-xl"
          >
            <p className="text-[#056FC5] ">More About us </p>
            <GoArrowRight className="text-[#056FC5] text-2xl lg:text-4xl" />
          </Link>
        </main>
      </div>
    </section>
  );
};

export default CTA;
