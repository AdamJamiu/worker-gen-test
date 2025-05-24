"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

type IAccordion = {
  label: string;
  content?: string;
  ContentElement?: ReactNode;
};

const Accordion = ({ content, label, ContentElement }: IAccordion) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [divHeght, setDivHeght] = useState("0px");

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setDivHeght(`${contentRef.current.scrollHeight}px`);
    } else {
      setDivHeght("0px");
    }
  }, [isExpanded]);

  return (
    <div className="rounded-2xl px-2 md:px-4 lg:px-6 py-3 bg-white border font-satoshi w-full">
      <button
        className="w-full flex justify-between items-center gap-3"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <p className="text-left text-sm md:text-base">{label}</p>
        <div
          className={`${
            isExpanded ? "rotate-90 bg-primary_green text-white" : "bg-white"
          } md:p-1 rounded-full border ease transition-all duration-200`}
        >
          <BiChevronRight className="text-[20px] md:text-[24px]" />
        </div>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: divHeght,
        }}
        className="overflow-hidden !font-satoshi_Variable ease transition-all duration-200"
      >
        <div className="w-full mt-4">
          <p>{content}</p>
          {ContentElement ? (
            <div className="!text-black text-sm">{ContentElement}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export const NavAccordion = ({
  content,
  label,
  ContentElement,
}: IAccordion) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [divHeght, setDivHeght] = useState("0px");

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setDivHeght(`${contentRef.current.scrollHeight}px`);
    } else {
      setDivHeght("0px");
    }
  }, [isExpanded]);

  return (
    <div className="rounded-2xl px-2 md:px-4 lg:px-6 py-3 font-satoshi w-full">
      <button
        className="flex justify-between items-center gap-3 text-black w-full"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <p className="text-lg">{label}</p>
        <div
          className={`${
            isExpanded ? "rotate-90 " : ""
          } ease transition-all duration-200 text-black`}
        >
          <BiChevronRight className="text-[24px]" />
        </div>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: divHeght,
        }}
        className="overflow-hidden !font-satoshi_Variable ease transition-all duration-200"
      >
        <div className="w-full mt-4">
          <p>{content}</p>
          {ContentElement ? (
            <div className="!text-black text-sm">{ContentElement}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
