import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  withCloseButton?: boolean;
}

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  withCloseButton,
}: ModalProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(isOpen);

  // Handle clicking outside modal to close
  const handleClickOutside = (e: MouseEvent) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setIsVisible(true); // Show modal immediately when opened
    } else {
      document.body.style.overflow = "auto";
      setTimeout(() => setIsVisible(false), 300); // Delay unmounting after animation
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setTimeout(() => onClose(), 300); // Ensure animation finishes before unmounting
  };

  if (!isVisible) return null; // Completely remove from DOM after animation

  return (
    <div onClick={handleClose}>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-65 z-[99]" : "opacity-0 -z-[9999] invisible"
        }`}
      ></div>

      {/* Modal Content */}
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[999] overflow-hidden">
        <div
          ref={contentRef}
          className={`relative bg-white rounded-xl py-5 transition-all duration-300 transform max-h-[80vh] h-max ${
            isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Header */}
          <div className="w-full flex justify-between items-center fixed top-1 left-0 right-0 px-4 py-4 lg:px-7 rounded-xl bg-white z-10">
            {title && (
              <h2 className="font-bricolage font-semibold text-lg lg:text-xl">
                {title}
              </h2>
            )}
            {withCloseButton && (
              <button className="" onClick={handleClose}>
                <CgClose size={23} className="text-neutrals600" />
              </button>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
