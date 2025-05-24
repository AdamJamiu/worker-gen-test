"use client";

import FormInput from "@/app/components/ui/FormInput";
import Modal from "@/app/components/ui/Modal";
import Select, { IOption } from "@/app/components/ui/Select";
import { adminCaller } from "@/app/interceptors";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { toast } from "react-toastify";
import { IPlanDetails } from "../type";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  details?: IPlanDetails;
}

const durations = ["Monthly", "Quaterly", "Yearly"];

const AddPlanModal = ({ isOpen, setIsOpen, details }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState<IOption>({ value: "", label: "" });
  const [planName, setPlanName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const queryClient = useQueryClient();

  const reset = () => {
    setPlanName("");
    setPrice("");
    setDuration({ label: "", value: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setLoading(true);
      const response = await adminCaller.post("users", {
        // fullName: planName + " " + lastName,
        // price,
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

  //   const { data: roles = [], isLoading } = useQuery<any>({
  //     queryKey: ["roles"],
  //     queryFn: async () => adminCaller.get("roles").then((res) => res.data?.data),
  //     refetchOnWindowFocus: false,
  //     enabled: false,
  //   });

  useEffect(() => {
    if (details) {
      setDuration({ label: details.type, value: details.type });
      setPlanName(details.name);
      setPrice("100");
    }
  }, [details]);

  const handleCloseModal = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <Modal
      withCloseButton
      title={`${details ? "Edit" : "Add"} plan`}
      isOpen={isOpen}
      onClose={handleCloseModal}
    >
      <div className="w-screen max-w-[680px] overflow-y-auto max-h-max h-[70vh] bg-white rounded-lg p-5 lg:p-8 flex flex-col mt-8">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormInput
              value={planName}
              name="planName"
              id="planName"
              title="Plan name"
              placeholder="Enter plan name"
              onChange={(e) => setPlanName(e.target.value)}
              required
            />

            <div className="w-full space-y-2">
              <label htmlFor="planDuration">Plan duration</label>
              <Select
                options={durations.map((item) => ({
                  label: item,
                  value: item,
                }))}
                selected={duration}
                onChange={(e) => setDuration(e)}
                placeholder="Select plan duration"
              />
            </div>

            <FormInput
              value={price}
              name="price"
              type="number"
              title="Price"
              id="price"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <div className="w-full space-y-2">
              <label htmlFor="address">Plan duration</label>
              <Select
                options={durations.map((item) => ({
                  label: item,
                  value: item,
                }))}
                selected={duration}
                onChange={(e) => setDuration(e)}
                placeholder="Select plan duration"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="planDuration">Maximum drivers</label>
              <Select
                options={durations.map((item) => ({
                  label: item,
                  value: item,
                }))}
                selected={duration}
                onChange={(e) => setDuration(e)}
                placeholder="Select plan duration"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="planDuration">Maximum drivers</label>
              <Select
                options={durations.map((item) => ({
                  label: item,
                  value: item,
                }))}
                selected={duration}
                onChange={(e) => setDuration(e)}
                placeholder="Select plan duration"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 w-full mt-10">
            <button
              onClick={handleCloseModal}
              type="button"
              className="sm:text-base text-sm rounded-lg text-primary bg-neutrals100  h-10 px-4 ease transition-all hover:opacity-60"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="sm:text-base text-sm rounded-lg bg-primary text-white flex justify-start items-center gap-1 h-10 px-4 ease transition-all hover:opacity-60"
            >
              <GoPlus size={22} />
              <p>Add</p>
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddPlanModal;
