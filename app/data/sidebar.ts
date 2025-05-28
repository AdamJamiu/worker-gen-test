import { FaRegBuilding, FaRegCircleUser } from "react-icons/fa6";
import { RiDashboardFill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbCashBanknote, TbNotes } from "react-icons/tb";
import { GoNote } from "react-icons/go";

export const sidebarItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LuLayoutDashboard,
    active_icon: RiDashboardFill,
    name: "/dashboard",
  },
  {
    href: "/dashboard/user-management",
    label: "User management",
    icon: FaRegCircleUser,
    name: "/user-management",
  },
  {
    href: "/dashboard/company-management",
    label: "Companies",
    icon: FaRegBuilding,
    active_icon: FaRegBuilding,
    name: "company-management",
  },
  {
    href: "/dashboard/subscriptions",
    label: "Subscription",
    icon: TbCashBanknote,
    name: "subscription",
  },

  {
    href: "/dashboard/transactions",
    label: "Transactions",
    icon: TbNotes,
    name: "transactions",
  },
  {
    href: "/dashboard/audit",
    label: "Audit log",
    icon: GoNote,
    name: "audit",
  },
];
