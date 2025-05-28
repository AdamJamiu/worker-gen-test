"use client";

import CustomButton from "@/app/components/ui/buttons/CustomButton";
import FormInput from "@/app/components/ui/FormInput";
import Modal from "@/app/components/ui/Modal";
import { IOption } from "@/app/components/ui/Select";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  details?: any;
}

const ChangeAdminPassword = ({ isOpen, setIsOpen }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState<IOption>({ value: "", label: "" });
  const [planName, setPlanName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const reset = () => {
    setPlanName("");
    setEmail("");
    setDuration({ label: "", value: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setLoading(true);
      //   const response = await adminCaller.post("users", {
      //     // fullName: planName + " " + lastName,
      //     // email,
      //     // address,
      //     // role,
      //     // phoneNumber,
      //   });

      //   if (response.data) {
      //     console.log("response.data", response.data);
      //     setIsOpen(false);
      //     toast.success("User created successfully!", {
      //       progress: undefined,
      //     });
      //   }

      setLoading(false);
      //   console.log("response", response);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Error creating staff.");
    }
  };

  const handleCloseModal = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <Modal
      withCloseButton
      title="Change password"
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <div className="w-screen max-w-[680px] overflow-y-auto max-h-max h-[70vh] bg-white rounded-lg p-5 lg:p-8 flex flex-col mt-8">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormInput
              required
              value={planName}
              type="password"
              id="currentPassword"
              name="currentPassword"
              title="Current Password"
              placeholder="********************"
              onChange={(e) => setPlanName(e.target.value)}
            />

            <FormInput
              required
              value={email}
              name="newPassword"
              type="password"
              title="New Password"
              placeholder="*********************"
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              required
              value={email}
              name="confirmPassword"
              type="password"
              title="Confirm Password"
              placeholder="*********************"
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-1 md:col-span-2"
            />
          </div>

          <div className="flex justify-center items-center gap-4 w-full mt-10">
            <CustomButton
              type="button"
              onClick={handleCloseModal}
              label="Cancel"
              color="gray"
            />
            <CustomButton label="Submit" />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ChangeAdminPassword;
