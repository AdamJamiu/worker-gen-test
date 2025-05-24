"use client";

import Image from "next/image";
import green_loop_logo from "../../assets/images/green-loop-round.svg";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IResetProps {
  setActive: Dispatch<SetStateAction<number>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

const ResetPassword = ({ setActive, setEmail, email }: IResetProps) => {
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");

      const { data } = await axios.post(
        "https://greenloop-latest.onrender.com/api/users/forgot-password",
        {
          email,
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
        setActive(2);
        toast.success("Email token sent!");
      } else {
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(
        err?.response?.data?.message || "Error generating reset token."
      );
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
          Forgot password?
        </p>
        <h3 className=" lg:text-lg text-[#8B8282] mt-8 mx-auto">
          Enter your email address, we are going to send a reset token to your
          mail.
        </h3>

        <form onSubmit={handleSubmit} className="w-full space-y-4 mt-7">
          <div className="w-full">
            <label
              htmlFor="email"
              className="font-medium text-base lg:text-lg text-[#0C0C0C]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#e8e8e8] placeholder:text-[#AAA9A9] rounded-lg py-3 px-5 mt-2"
              placeholder="Enter email address"
              type="email"
              required
            />
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

export default ResetPassword;
