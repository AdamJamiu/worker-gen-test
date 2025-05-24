"use client";

import Image from "next/image";
import auth_spiral from "../assets/images/auth-spiral.png";
import auth_app_card_1 from "../assets/images/auth-app-card-1.png";
import auth_app_card_2 from "../assets/images/auth-app-card-2.png";
import auth_app_card_3 from "../assets/images/auth-app-card-3.png";
import fleetpro_logo from "../assets/images/fleetpro-logo.png";
import { adminCaller } from "../interceptors";
import Link from "next/link";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      const { data } = await axios.post(
        "https://greenloop-latest.onrender.com/api/tokens",
        {
          email,
          password,
        },
        {
          headers: {
            tenant: "root",
          },
        }
      );

      setLoading(false);
      console.log(data);

      if (data) {
        console.log("data", data);
        sessionStorage.setItem("green-loop-admin", JSON.stringify(data?.data));
        sessionStorage.setItem("token", data?.data?.token);
        toast.success("You are in, enjoy your session!");
        navigate.push("/dashboard");
      } else {
      }
    } catch (err: any) {
      setLoading(false);
      if (err?.status === 401) {
        toast.error("Invalid email/password");
      }
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen md:min-h-0 md:h-screen flex flex-col md:grid md:grid-cols-2 md:overflow-hidden bg-white font-openSans">
      <div className="md:block hidden relative overflow-hidden">
        <div className="bg-primary100 overflow-hidden pattern-1 h-full flex flex-col p-4 md:p-7 lg:p-10">
          <Image
            src={auth_spiral}
            alt="central-dashboard"
            height={182}
            width={199}
            className="absolute top-0 right-0 w-[300px] h-[300px]"
          />

          <h1 className="font-openSans text-5xl md:text-6xl lg:text-[72px] relative font-semibold mt-10">
            Manage{" "}
            <span className="italic font-normal">
              your
              <br /> fleet
            </span>{" "}
            operations
          </h1>

          <div className="absolute bottom-4 left-8 flex justify-start items-end gap-3">
            <Image
              src={auth_app_card_1}
              alt="auth_app_card_1"
              height={100}
              width={200}
              className="object-contain"
            />
            <Image
              src={auth_app_card_2}
              alt="auth_app_card_2"
              height={70}
              width={60}
              className="object-contain"
            />
            <Image
              src={auth_app_card_3}
              alt="auth_app_card_3"
              height={42}
              width={79}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-full w-full flex flex-col justify-center items-center overflow-y-auto">
        <section className="flex justify-center items-start w-full max-w-md flex-col h-full px-4 py-10 lg:p-0">
          <Image
            src={fleetpro_logo}
            alt="fleetpro_logo"
            width={100}
            height={100}
            // className="mx-auto"
          />
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-900 mt-6 font-openSans">
            Sign in
          </h3>
          <p className="mt-2 text-neutral-500 text-sm lg:text-base font-inter">
            Kindy enter your login creedntials
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4 mt-7 font-inter"
          >
            <div className="w-full">
              <input
                id="email"
                name="email"
                className="w-full border border-[#e8e8e8] placeholder:text-[#AAA9A9] rounded-lg py-3 px-5 mt-2 font-inter"
                placeholder="Email"
                type="email"
                required
              />
            </div>

            <div className="w-full">
              <div className="w-full relative">
                <input
                  id="password"
                  name="password"
                  className="w-full border border-[#e8e8e8] placeholder:text-[#AAA9A9] rounded-lg py-3 px-5 mt-2"
                  placeholder="Password"
                  type={isPasswordVisible ? "text" : "password"}
                  required
                />

                <button
                  title={isPasswordVisible ? "Hide password" : "Show password"}
                  type="button"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                  className="hover:bg-gray-200 active:bg-gray-300 rounded-full text-[#AAA9A9] p-1.5 text-2xl ese transition-all duration-200 absolute right-3 top-3"
                >
                  {!isPasswordVisible ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </button>
              </div>
            </div>
            <div className="mt-4 w-full flex justify-end items-end">
              <Link
                href="forgot-password"
                type="button"
                className="text-[#666161] text-base lg:text-[16px] hover:underline"
              >
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-lg w-full bg-primary hover:opacity-80 text-white mt-10 hover:bg-primary_success ease transition-all duration-200 disabled:opacity-55 disabled:cursor-not-allowed gilroy"
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
