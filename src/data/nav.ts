import { TNavItem } from "@/types/nav.types";

// icons
import { BiSupport } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { TbBrandPaypal } from "react-icons/tb";
import { LuScanQrCode } from "react-icons/lu";

export const products: TNavItem[] = [
  {
    icon: IoWalletOutline({}),
    label: "Earn as You Waste",
  },
  {
    icon: TbBrandPaypal({}),
    label: "Pay as You Waste",
  },
  {
    icon: LuScanQrCode({}),
    label: "Smart Waste Management",
  },
];

export const help: TNavItem[] = [
  {
    icon: BiSupport({}),
    label: "Support",
  },
  {
    icon: BiSupport({}),
    label: "Support",
  },
];
