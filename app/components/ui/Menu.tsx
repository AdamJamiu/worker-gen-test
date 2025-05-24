"use client";

import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";

interface IMenu {
  title?: string;
  className?: string;
  btnStyles?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  MenuIcon: ReactElement;
  Content?: ReactElement;
  withCloseBtn?: boolean;
}

const Menu = ({
  MenuIcon,
  className,
  btnStyles,
  Content,
  title,
  withCloseBtn,
  isOpen,
  setIsOpen,
}: IMenu) => {
  const btnRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(e.target as Node) &&
      btnRef.current &&
      !btnRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8, // 8px offset
        left: rect.right + window.scrollX - 200, // assuming 200px menu width
      });
    }
  }, [isOpen]);

  return (
    <>
      <div ref={btnRef} onClick={() => setIsOpen(true)} className={btnStyles}>
        {MenuIcon}
      </div>

      {isOpen &&
        createPortal(
          <div
            ref={contentRef}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              zIndex: 9999,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`${className} w-[200px] p-3 h-max bg-white shadow-xl rounded-xl relative`}
            >
              {withCloseBtn && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 rounded-full p-1.5 hover:bg-gray-100 ease transition"
                >
                  <IoClose color="#898384" size={24} />
                </button>
              )}

              <div onClick={(e) => e.stopPropagation()}>{Content}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Menu;
