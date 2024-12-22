import { AppContext } from "@/app/components/Provider";
import { IAppProvider } from "@/types/nav.types";
import { useContext } from "react";

const useApp = (): IAppProvider => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return context;
};

export default useApp;
