"use client";

import AppInput from "@/app/components/ui/Input";
import Modal from "@/app/components/ui/Modal";
import Select, { IOption } from "@/app/components/ui/Select";
import { adminCaller } from "@/app/interceptors";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { GoPlus } from "react-icons/go";
import { IRolesListResponse } from "./RolesTable";
import { toast } from "react-toastify";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddUserModal = ({ isOpen, setIsOpen }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  // const [fullName, setFullName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setLoading(true);
      const response = await adminCaller.post("users", {
        fullName: firstName + " " + lastName,
        email,
        address,
        role,
        phoneNumber,
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

  const { data: roles = [], isLoading } = useQuery<IRolesListResponse[]>({
    queryKey: ["roles"],
    queryFn: async () => adminCaller.get("roles").then((res) => res.data?.data),
    refetchOnWindowFocus: false,
    enabled: isOpen,
  });

  return (
    <Modal title="Add user" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="w-screen max-w-[450px] overflow-y-auto h-[70vh] bg-white rounded-lg p-5 flex flex-col mt-8">
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="w-full space-y-2">
            <label htmlFor="firstName">First Name</label>
            <input
              value={firstName}
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 "
              required
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              value={lastName}
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 "
              required
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              name="email"
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 "
              required
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="address">Address</label>
            <input
              value={address}
              name="address"
              id="address"
              placeholder="Enter address"
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 "
              required
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              value={phoneNumber}
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 "
              required
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="role">Role</label>
            <select
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              id="role"
              className="w-full p-3 rounded-lg border border-neutral-300 placeholder:text-neutral-400 text-neutral-700 "
            >
              <option className="text-neutral-400" disabled value="">
                Select role
              </option>
              {roles.map((item, index) => (
                <option value={item?.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <button className="sm:text-base text-sm rounded-lg bg-primary text-white flex justify-start items-center gap-1 h-10 px-4 ease transition-all hover:opacity-60 font-clash_display">
            <GoPlus size={22} />
            <p>Add user</p>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddUserModal;
