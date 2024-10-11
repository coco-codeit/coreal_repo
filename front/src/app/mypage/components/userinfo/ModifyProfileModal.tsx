import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
import { UserProfileInterface } from "@/types/common";
import { getUserProfile, updateUserProfile } from "@/apis/profile";
import Button from "../Button";
import UserImage from "../UserImage";
import useUserInfo from "@/stores/useUserInfo";

interface FormDataInterface {
  companyName: string;
  image: string;
}

export default function ModifyProfileModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [formData, setFormData] = useState<FormDataInterface | undefined>();
  const { image, companyName, setImage, setCompanyName } = useUserInfo();

  useEffect(() => {
    async () => {
      const data: UserProfileInterface = await getUserProfile();
      setFormData({ companyName: data.companyName, image: data.image });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      updateUserProfile(formData);
      setCompanyName(formData.companyName);
      setImage(formData.image);
    }
    closeModal();
  };

  const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData && setFormData({ ...formData, companyName: e.target.value });
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData && setFormData({ ...formData, image: e.target.value });
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
            <div className="flex flex-col gap-6 text-sm">
              <label htmlFor="image" className="block">
                <UserImage
                  src={image}
                  name=""
                  className="hover:shadow-lg cursor-pointer"
                />
              </label>
              <div>
                <label htmlFor="company" className="font-semibold block mb-2">
                  회사
                </label>
                <input
                  type="text"
                  placeholder="회사명을 입력해주세요"
                  id="company"
                  value={companyName}
                  onChange={handleChangeCompany}
                  className="rounded-lg bg-gray-50 py-2 px-3 w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4 font-semibold">
                <Button
                  onClick={closeModal}
                  className="border border-orange-600 text-orange-600 hover:shadow-lg"
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  className="bg-gray-400 text-white hover:bg-orange-600 hover:shadow-lg"
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
        name=""
        id="image"
        accept="image/jpeg,image/png"
        onChange={handleChangeImage}
        className="hidden"
      />
    </>
  );
}
