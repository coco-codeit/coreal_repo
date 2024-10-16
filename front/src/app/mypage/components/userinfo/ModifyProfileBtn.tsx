"use client";

import { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import ModifyProfileModal from "./ModifyProfileModal";

export default function ModifyProfileBtn() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-8 h-8 rounded-full bg-gray-800 grid justify-center items-center hover:bg-gray-700 hover:drop-shadow-md active:bg-gray-900"
      >
        <RiPencilFill className="text-gray-200" />
      </button>
      <ModifyProfileModal open={isOpen} setOpen={setIsOpen} />
    </>
  );
}
