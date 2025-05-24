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
    <div className="relative bg-neutralBase min-h-screen px-4 py-14 sm:px-10 sm:py-24 md:py-32 md:pl-10 md:pr-8 lg:px-4 xl:pl-16 2xl:pl-20 xl:ml-[200px]">
      {children}
    </div>
  );
};

export default AdminAuthWrapper;
