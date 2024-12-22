import { RiWechatChannelsFill } from "react-icons/ri";
import { PiChats } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { LuMessageSquare } from "react-icons/lu";

const RightNav = () => {
  return (
    <aside className="fixed top-0 right-0 bottom-0 bg-[#EFEFEF] p-3 pt-7 hidden lg:flex flex-col gap-5 text-gray-700 z-30">
      <button>
        <RiWechatChannelsFill />
      </button>
      <button>
        <PiChats />
      </button>
      <button>
        <IoCallOutline />
      </button>
      <button>
        <LuMessageSquare />
      </button>
    </aside>
  );
};

export default RightNav;
