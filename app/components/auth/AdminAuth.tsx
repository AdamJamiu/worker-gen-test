"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const AdminAuthWrapper = ({ children }: { children: ReactNode }) => {
  const navigate = useRouter();
  const [token, setToken] = useState<string | null>(null);

  // useEffect(() => {
  //   const storedToken = sessionStorage.getItem("token");
  //   setToken(storedToken);

  //   if (!storedToken) {
  //     sessionStorage.clear();
  //     navigate.replace("/");
  //   }
  // }, []);

  return (
    <div className="relative bg-neutralBase min-h-screen px-4 pt-20 pb-4 sm:px-6 sm:py-20 md:py-28 md:px-6 lg:px-4 xl:pl-16 2xl:pl-20 xl:ml-[160px]">
      {children}
    </div>
  );
};

export default AdminAuthWrapper;
