"use client";

import { useState } from "react";
import ModifyProfileModal from "./ModifyProfileModal";
import { RiPencilFill } from "react-icons/ri";

export default function ModifyProfileBtn() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-8 h-8 rounded-full bg-gray-200 grid justify-center items-center hover:bg-white hover:drop-shadow-md active:bg-gray-300"
      >
        <RiPencilFill className="text-gray-400" />
      </button>
      <ModifyProfileModal open={isOpen} setOpen={setIsOpen} />
    </>
  );
}
