"use client";

import Modal from "@/app/components/ui/Modal";
import MultiSelect from "@/app/components/ui/MultiSelect";
import { adminCaller } from "@/app/interceptors";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { GoPlus } from "react-icons/go";
import { toast } from "react-toastify";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddWasteModal = ({ isOpen, setIsOpen }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setLoading(true);
      const response = await adminCaller.post("users", {
        // fullName: firstName + " " + lastName,
        // email,
        // address,
        // role,
        // phoneNumber,
      });

      if (response.data) {
        console.log("response.data", response.data);
        setIsOpen(false);
        toast.success("User created successfully!", {
          progress: undefined,
        });
      }

      setLoading(false);
      console.log("response", response);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Error creating staff.");
    }
  };

  return (
    <Modal title="Add waste" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="w-screen max-w-[450px] overflow-y-auto max-h-[70vh] bg-white rounded-lg p-5 flex flex-col">
        <div className="w-full flex flex-col gap-5">
          <div className="w-full space-y-2">
            <p>Name</p>
            <input
              value={name}
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 "
              required
            />
          </div>

          <MultiSelect
            label="Waste category"
            selectedValues={selectedCategories}
            setSelectedValues={setSelectedCategories}
          />

          <button className="w-max mt-10 sm:text-base text-sm rounded-lg bg-primary text-white flex justify-start items-center gap-1 h-10 px-4 ease transition-all hover:opacity-60 font-clash_display">
            <GoPlus size={22} />
            <p>Add waste</p>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddWasteModal;
