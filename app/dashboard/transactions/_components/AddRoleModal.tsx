"use client";

import Modal from "@/app/components/ui/Modal";
import { adminCaller } from "@/app/interceptors";
import { Dispatch, FormEventHandler, SetStateAction, useState } from "react";
import { GoPlus } from "react-icons/go";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddRoleModal = ({ isOpen, setIsOpen }: IProps) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!name || !description) return;

    try {
      e.preventDefault();

      setLoading(true);
      const response = await adminCaller.post("roles", {
        name,
        description,
        id: 1,
      });

      setLoading(false);
      console.log("response", response);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Modal title="Add role" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="w-screen max-w-[450px] overflow-y-auto h-max mx-h-[70vh] bg-white rounded-lg p-5 flex flex-col mt-8">
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="w-full space-y-2">
            <label htmlFor="Name">Name</label>
            <input
              value={name}
              name="name"
              placeholder="Enter role name"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 font-medium"
              required
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="Name">Description</label>
            <textarea
              value={description}
              name="description"
              cols={5}
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 font-medium"
              required
            />
          </div>

          <button
            disabled={loading}
            className="disabled:opacity-55 sm:text-base text-sm rounded-lg bg-primary text-white flex justify-start items-center gap-1 h-10 px-4 ease transition-all hover:opacity-60 font-clash_display_medium"
          >
            <GoPlus size={22} />
            <p>Add role</p>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddRoleModal;
