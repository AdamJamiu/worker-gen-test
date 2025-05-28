"use client";

import AdminAuthWrapper from "@/app/components/auth/AdminAuth";
import SettingsNav from "./_components/SettingsNav";
import { useState } from "react";
import Profile from "./_components/Profile";

const Page = () => {
  const [active, setActive] = useState(1);

  return (
    <AdminAuthWrapper>
      <div className="w-full">
        <h1 className="font-bricolage font-semibold text-neutrals900 text-base md:text-lg lg:text-xl xl:text-2xl">
          Settings
        </h1>

        <SettingsNav active={active} setActive={setActive} />

        <div className="mt-7">
          {active === 1 ? <Profile /> : null}
          {active === 2 ? <Profile /> : null}
        </div>
      </div>
    </AdminAuthWrapper>
  );
};

export default Page;
