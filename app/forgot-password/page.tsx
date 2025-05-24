"use client";

import Image from "next/image";
import green_sun_pattern from "../assets/images/green-sun-pattern.svg";
import central_dashboard_img from "../assets/images/central-dashboard.svg";
import { useState } from "react";
import ResetPassword from "./_components/ResetPassword";
import EnterOtp from "./_components/EnterOtp";

const Page = () => {
  const [active, setActive] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  return (
    <div className="w-full min-h-screen md:min-h-0 md:h-screen flex flex-col md:grid md:grid-cols-2 md:overflow-hidden bg-slate-100/70 font-satoshi">
      <div className="md:block hidden relative">
        <div className="bg-primary100 overflow-hidden pattern-1 h-full flex flex-col">
          <Image
            src={green_sun_pattern}
            alt="logo"
            height={769}
            width={769}
            className="absolute top-[20%] lg:-top-10 right-5 w-[399px] h-[399px] lg:w-[739px] lg:h-[739px]"
          />
          <Image
            src={central_dashboard_img}
            alt="central-dashboard"
            height={482}
            width={399}
            className="absolute top-[28%] lg:top-[16%] right-[20%] lg:right-[26%] w-[282px] h-[299px] xl:w-[399px] xl:h-[482px]"
          />
        </div>
      </div>

      {active === 2 ? (
        <ResetPassword
          email={email}
          setActive={setActive}
          setEmail={setEmail}
        />
      ) : null}

      {active === 1 ? (
        <EnterOtp otp={otp} setOtp={setOtp} setActive={setActive} />
      ) : null}
    </div>
  );
};

export default Page;
