"use client";

import { TLeads } from "@/types/lead";
import { IAppProvider } from "@/types/nav.types";
import React, { createContext, ReactNode, useState } from "react";

type AppProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<IAppProvider | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState<boolean>(true);
  const [engageDetailsOpen, setIsEngageDetailsOpen] = useState<boolean>(false);
  const [isAgentSkillsOpen, setIsAgentSkillsOpen] = useState<boolean>(false);
  const [engageDetails, setEngageDetails] = useState<TLeads | null>(null);

  const values: IAppProvider = {
    isSidebar,
    setIsSidebar,
    engageDetails,
    setEngageDetails,
    engageDetailsOpen,
    setIsEngageDetailsOpen,
    isAgentSkillsOpen,
    setIsAgentSkillsOpen,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
