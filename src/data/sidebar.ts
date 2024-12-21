import { AiOutlineHome } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { BsPinAngle } from "react-icons/bs";

// my work
import { GoRocket } from "react-icons/go";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbClipboardCopy } from "react-icons/tb";

// my work
import { PiNewspaperLight } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";

// my work
import { BsTelephoneX } from "react-icons/bs";
import { RiContactsBookLine } from "react-icons/ri";
import { TbUserQuestion } from "react-icons/tb";

// collateral
import { PiNotepad } from "react-icons/pi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbFileInvoice } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import { MdOutlineTableChart } from "react-icons/md";

// marketing
import { MdCampaign } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export const sidebar = [
  {
    title: "",
    items: [
      {
        label: "Home",
        icon: AiOutlineHome,
        withArrow: false,
      },
      {
        label: "Recent",
        icon: IoTimeOutline,
        withArrow: true,
      },
      {
        label: "Pinned",
        icon: BsPinAngle,
        withArrow: true,
      },
    ],
  },

  {
    title: "My work",
    items: [
      {
        label: "Sales accelerator",
        icon: GoRocket,
        withArrow: false,
      },
      {
        label: "Dashboards",
        icon: MdOutlineDashboardCustomize,
        withArrow: false,
      },
      {
        label: "Activities",
        icon: TbClipboardCopy,
        withArrow: false,
      },
    ],
  },
  {
    title: "Customers",
    items: [
      {
        label: "Accounts",
        icon: PiNewspaperLight,
        withArrow: false,
      },
      {
        label: "Contacts",
        icon: RiUserLine,
        withArrow: false,
      },
    ],
  },
  {
    title: "Sales",
    items: [
      {
        label: "Lead",
        icon: BsTelephoneX,
        withArrow: false,
      },
      {
        label: "Opportunities",
        icon: RiContactsBookLine,
        withArrow: false,
      },
      {
        label: "Competitors",
        icon: TbUserQuestion,
        withArrow: false,
      },
    ],
  },
  {
    title: "Collateral",
    items: [
      {
        label: "Quotes",
        icon: PiNotepad,
        withArrow: false,
      },
      {
        label: "Orders",
        icon: LiaFileInvoiceSolid,
        withArrow: false,
      },
      {
        label: "Invoices",
        icon: TbFileInvoice,
        withArrow: false,
      },
      {
        label: "Products",
        icon: BsBox,
        withArrow: false,
      },
      {
        label: "Sales Literature",
        icon: MdOutlineTableChart,
        withArrow: false,
      },
    ],
  },
  {
    title: "Marketing",
    items: [
      {
        label: "Marketing list",
        icon: MdCampaign,
        withArrow: false,
      },
      {
        label: "Quick campaigns",
        icon: HiOutlineSpeakerphone,
        withArrow: false,
      },
    ],
  },
];
