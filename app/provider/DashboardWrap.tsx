"use client";

import { ReactNode, useEffect } from "react";

const DashboardWrap = ({ children }: { children: ReactNode }) => {
  const token = false;
  useEffect(() => {
    if (token) {
      console.log("not authorised");
    }
  }, []);
  return <>{children}</>;
};

export default DashboardWrap;
