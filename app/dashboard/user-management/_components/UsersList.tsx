"use client";

import Modal from "@/app/components/ui/Modal";
// import Card from "./_components/Card";
import Table from "./Table";
import { useCallback, useState } from "react";
import AppInput from "@/app/components/ui/Input";
import { GoPlus } from "react-icons/go";
import Select, { IOption } from "@/app/components/ui/Select";

export default function UsersList() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [lga, setLga] = useState<string>("");
  const [state, setState] = useState<IOption>({ value: "", label: "" });
  const [busStop, setBusStop] = useState<string>("");

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <section className="relative bg-neutralBase min-h-screen py-10 p-4 sm:p-10 md:py-28 lg:py-32 md:pl-10 md:pr-8 lg:px-4 lg:pl-16 2xl:pl-20 lg:ml-[200px]">
      <div className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
          {/* <Card
            individuals="1000"
            vendors="2000"
            organizations="2000"
            theme="green"
            label="Total users"
          />
          <Card
            individuals="1000"
            organizations="2000"
            vendors="2000"
            theme="blue"
            label="Awarded points"
          />
          <Card
            pending="100"
            completed="2000"
            theme="yellow"
            label="Recycle requests"
          /> */}
        </div>
        <h1 className="font-clash_display_semibold text-neutral-700 text-base md:text-lg xl:text-xl mt-7">
          Individual users
        </h1>
        <Table onOpenModal={handleOpenModal} data={[]} />
      </div>

      <Modal
        title="Add customer"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="w-screen max-w-[450px] overflow-y-auto h-[70vh] bg-white rounded-lg p-4 flex flex-col mt-8">
          <form className="w-full space-y-5">
            <AppInput
              label="Enter customer name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="w-full"
            />
            <AppInput
              label="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full"
              type="email"
            />
            <AppInput
              label="Enter phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="w-full"
              type="tel"
            />
            <AppInput
              label="Home address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="w-full"
            />
            {/* <AppInput
              label="State"
              onChange={(e) => setState(e.target.value)}
              value={state}
              className="w-full"
            /> */}

            <Select
              selected={state}
              options={[{ label: "Lagos", value: "lagos" }]}
              onChange={(e) => setState(e)}
              placeholder="Select state"
            />
            <AppInput
              label="LGA"
              onChange={(e) => setLga(e.target.value)}
              value={lga}
              className="w-full"
            />
            <AppInput
              label="Nearest Bus stop"
              onChange={(e) => setBusStop(e.target.value)}
              value={busStop}
              className="w-full"
            />
            <button className="sm:text-base text-sm rounded-lg bg-primary text-white flex justify-start items-center gap-1 h-10 px-4 ease transition-all hover:opacity-60 font-clash_display">
              <GoPlus size={22} />
              <p>Add user</p>
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
}
