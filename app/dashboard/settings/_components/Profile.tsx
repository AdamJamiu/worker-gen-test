"use client";

import { BiTrash } from "react-icons/bi";
import avatar from "../../../assets/images/admin-avatar.png";
import Image from "next/image";
import CustomButton from "@/app/components/ui/buttons/CustomButton";
import { FiEdit } from "react-icons/fi";
import EditAdminProfile from "./EditAdminProfile";
import { useState } from "react";
import ChangeAdminPassword from "./ChangeAdminPassword";
import ActionModal from "@/app/components/modals/ActionModal";

const Profile = () => {
  const [isEditProfileModal, setIsEditProfileModal] = useState(false);
  const [ishangePasswordModal, setIsChangePasswordModal] = useState(false);
  const [isDeactiveModal, setIsDeactiveModal] = useState(false);

  return (
    <div className="w-full font-bricolage">
      <div className="w-full bg-white p-4 md:px-5 rounded-xl flex justify-between items-center gap-5 sm:flex-nowrap flex-wrap">
        <div className="flex justify-start items-center gap-4">
          <Image
            src={avatar}
            alt="avatar"
            width={65}
            height={65}
            className="rounded-full"
          />
          <div>
            <h2 className="font-medium text-neutrals900 text-base sm:text-lg md:text-lg">
              Fleetpro Admin
            </h2>
            <p className="text-neutrals500 text-sm md:text-base">
              JohnsonD@gmail.com
            </p>
          </div>
        </div>

        <CustomButton
          color="danger"
          LeftIcon={BiTrash}
          label="Deactivate"
          onClick={() => setIsDeactiveModal(true)}
        />
      </div>

      {/*  */}
      <div className="w-full bg-white rounded-xl mt-8">
        <div className="w-full p-4 md:px-5 flex justify-between items-center gap-7 border-b border-neutrals400 flex-wrap md:flex-nowrap">
          <h2 className="font-bricolage font-semibold text-neutrals900 text-base md:text-lg lg:text-xl">
            Admin profile
          </h2>

          <div className="flex justify-start items-center gap-3 min-w-max">
            <CustomButton
              onClick={() => setIsChangePasswordModal(true)}
              label="Change password"
              color="gray"
            />
            <CustomButton
              RightIcon={FiEdit}
              label="Edit profile"
              onClick={() => setIsEditProfileModal(true)}
            />
          </div>
        </div>

        <div className="w-full px-4 py-8 md:px-5 space-y-6 font-bricolage text-sm md:text-base">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 font-medium">
            <p className="col-span-1 text-neutrals500">Name</p>
            <p className="col-span-1 text-neutrals700 break-words">
              Johnbosco Davies
            </p>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 font-medium">
            <p className="col-span-1 text-neutrals500">Email address</p>
            <p className="col-span-1 text-neutrals700 break-words">
              Johnboscodaviess@gmail.com
            </p>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 font-medium">
            <p className="col-span-1 text-neutrals500">Phone Number</p>
            <p className="col-span-1 text-neutrals700">081 4596 58598</p>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 font-medium">
            <p className="col-span-1 text-neutrals500">Home address</p>
            <p className="col-span-1 text-neutrals700 break-words">
              123, ABC Road, Lagos
            </p>
          </div>
        </div>
      </div>

      <EditAdminProfile
        isOpen={isEditProfileModal}
        setIsOpen={setIsEditProfileModal}
      />

      <ChangeAdminPassword
        isOpen={ishangePasswordModal}
        setIsOpen={setIsChangePasswordModal}
      />

      <ActionModal
        setIsOpen={setIsDeactiveModal}
        isOpen={isDeactiveModal}
        customActionText="Yes, Deactivate"
        confirmActionFnc={async () => console.log("")}
      />
    </div>
  );
};

export default Profile;
