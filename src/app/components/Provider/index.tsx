"use client";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type IAppProvider = {
  isSidebar: boolean;
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
};

type AppProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<IAppProvider | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState<boolean>(true);

  const values: IAppProvider = { isSidebar, setIsSidebar };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
