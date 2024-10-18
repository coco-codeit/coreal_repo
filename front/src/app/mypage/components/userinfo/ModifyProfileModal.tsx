"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { RiPencilFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { updateUserProfile } from "@/libs/profileApi";
import Button from "../Button";
import UserImage from "../UserImage";
import useUserInfo from "@/stores/useUserInfo";

export default function ModifyProfileModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { image, companyName, setImage, setCompanyName } = useUserInfo();
  const [inputImage, setInputImage] = useState<File | string>("");
  const [inputCompany, setInputCompany] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string>("");

  useEffect(() => {
    if (image) {
      setPreviewImage(image);
      setInputImage(image);
    }
  }, [image]);

  useEffect(() => {
    if (companyName) setInputCompany(companyName);
  }, [companyName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputImage || inputCompany) {
      updateUserProfile({
        image: inputImage || "",
        companyName: inputCompany || "",
      }).then((res) => {
        setCompanyName(res.companyName);
        setImage(res.image);
      });
    }
    closeModal();
  };

  const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCompany(e.target.value);
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (reader.readyState === 2) {
        const imgUrl = event.target?.result as string;
        imgUrl && setPreviewImage(imgUrl);
        setInputImage(file);
        console.log(imgUrl, file);
      }
    };
  };

  const closeModal = () => setOpen(false);

  return (
    <>
      <Dialog
        open={open}
        onClose={closeModal}
        className="fixed inset-0 flex flex-col justify-center items-center"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <DialogPanel className="z-50 space-y-4 bg-white rounded-xl p-6 w-[90vw] max-w-[400px]">
          <DialogTitle className="font-bold relative">
            프로필 수정
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 rounded-full p-1 hover:bg-gray-100 active:bg-gray-50"
            >
              <IoCloseOutline />
            </button>
          </DialogTitle>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6 text-sm items-start">
              <label
                htmlFor="image"
                className="inline-block relative hover:drop-shadow-lg cursor-pointer"
              >
                <UserImage src={previewImage} />
                <span className="inline-block absolute -bottom-1 -right-1 rounded-full p-1 bg-gray-200 border-2 border-white box-border">
                  <RiPencilFill color="#fff" size="0.75rem" />
                </span>
              </label>
              <div className="w-full">
                <label htmlFor="company" className="font-semibold block mb-2">
                  회사
                </label>
                <input
                  type="text"
                  placeholder="회사명을 입력해주세요"
                  id="company"
                  value={inputCompany}
                  onChange={handleChangeCompany}
                  className="rounded-lg bg-gray-50 py-2 px-3 w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4 font-semibold w-full">
                <Button
                  onClick={closeModal}
                  className="border border-gray-900 text-gray-900 hover:border-red-600 hover:bg-red-50  hover:text-red-600"
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  className="bg-gray-400 text-white hover:bg-gray-900 hover:text-green-2"
                >
                  수정하기
                </Button>
              </div>
            </div>
          </form>
        </DialogPanel>
      </Dialog>
      <input
        type="file"
        id="image"
        accept="image/jpeg,image/png"
        onChange={handleChangeImage}
        className="hidden"
      />
    </>
  );
}
