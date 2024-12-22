import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { TLeads } from "./lead";

export type TNavItem = {
  label: string;
  icon: any;
};

export type TNavDropdown = {
  title: string;
  data: TNavItem[];
};

export type IAppProvider = {
  isSidebar: boolean;
  engageDetails: TLeads | null;
  engageDetailsOpen: boolean;
  isAgentSkillsOpen: boolean;
  setIsAgentSkillsOpen: Dispatch<SetStateAction<boolean>>;
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
  setEngageDetails: Dispatch<SetStateAction<TLeads | null>>;
  setIsEngageDetailsOpen: Dispatch<SetStateAction<boolean>>;
};
