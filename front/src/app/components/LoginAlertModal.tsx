"use client";

import { Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";

interface LoginALertModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  onConfirm: () => void;
}

const LoginAlertModal: React.FC<LoginALertModalProps> = ({
  isOpen,
  onClose,
  message,
  onConfirm,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-20 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />
        <div className="sm:w-[450px] sm:h-[188px] w-[300px] h-[200px] p-6 bg-white rounded-md max-w-sm mx-auto z-30 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
          >
            <AiOutlineClose size={20} />
          </button>
          <div className="mt-12 mb-6 w-full">
            <p className="text-[16px] text-center">{message}</p>
          </div>
          <div className="flex justify-end w-full mt-4">
            <button
              onClick={onConfirm}
              className="w-[120px] h-11 rounded-md bg-gray-900 text-green-2"
            >
              로그인하기
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default LoginAlertModal;
