"use client";

import useApp from "@/hooks/useApp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsStars } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const AgentSkills = () => {
  const { isAgentSkillsOpen, setIsAgentSkillsOpen } = useApp();

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsAgentSkillsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${
        isAgentSkillsOpen ? "visible z-[9999] fixed" : "invisible -z-[9999]"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-25 z-[90]"></div>
      <div
        ref={modalRef}
        className={`${
          isAgentSkillsOpen
            ? "-translate-y-[50%] opacity-100 scale-100"
            : "translate-y-[50%] opacity-0 scale-95"
        } ease-linear transition-all duration-100 w-screen max-w-[900px] fixed top-[50%] left-[50%] -translate-x-[50%] rounded-xl bg-white z-[99909] p-6`}
      ></div>
    </div>
  );
};

export default AgentSkills;
