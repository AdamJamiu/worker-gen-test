"use client";

import Image from "next/image";
import green_loop_logo from "../../assets/images/green-loop-round.svg";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

interface IEnterOtp {
  setActive: Dispatch<SetStateAction<number>>;
  setOtp: Dispatch<SetStateAction<string[]>>;
  otp: string[];
  // setActive: Dispatch<SetStateAction<number>>;
}

const EnterOtp = ({ setActive, setOtp, otp }: IEnterOtp) => {
  const [loading, setLoading] = useState(false);
  // const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<any[]>([]);

  const handleChange = (event: any, index: number) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < inputRefs.current.length - 1 && value !== "") {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event: any, index: number) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      const { data } = await axios.post(
        "https://greenloop-latest.onrender.com/api/otp/verify-otp",
        {
          otp,
        },
        {
          headers: {
            tenant: "root",
          },
        }
      );

      setLoading(false);
      // console.log(data);

      if (data) {
        console.log("data", data);
        setActive(3);
        toast.success("OTP verified!");
      } else {
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.response?.data?.message || "Error verifying OTP.");
      console.log(err);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center overflow-y-auto font-bricolage">
      <section className="flex justify-center items-start w-full max-w-md flex-col h-full px-4 py-10 lg:p-0">
        <Image
          src={green_loop_logo}
          alt="green-loop-round"
          width={100}
          height={100}
          className="mx-auto"
        />
        <p className="font-bricolage mt-2 font-semibold text-primary text-xl sm:text-2xl md:text-3xl mx-auto">
          Enter 4 Digits Code
        </p>
        <h3 className=" lg:text-lg text-[#8B8282] mt-8 mx-auto">
          Enter the 4 digits code sent to your email address.
        </h3>

        <form onSubmit={handleSubmit} className="w-full space-y-4 mt-7">
          <div className="w-full">
            <label
              htmlFor="email"
              className="font-medium text-base lg:text-lg text-[#0C0C0C]"
            >
              Email
            </label>

            <div className="flex justify-start items-center gap-3 my-[2em]">
              {otp.map((value: string, index: number) => (
                <input
                  className="font-bold w-[70px] h-[65px] text-center border-[2px] rounded-lg text-lg m-0"
                  key={index}
                  type="text"
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(ref) => {
                    if (ref) {
                      inputRefs.current[index] = ref;
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 w-full flex justify-end items-end">
            <Link
              href="forgot-password"
              type="button"
              className="text-[#666161] text-base lg:text-[16px] hover:underline"
            >
              Login
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-lg w-full bg-primary hover:bg-primary600 text-white mt-10 hover:bg-primary_success ease transition-all duration-200 disabled:opacity-55 disabled:cursor-not-allowed"
          >
            Reset
          </button>
        </form>
      </section>
    </div>
  );
};

export default EnterOtp;
