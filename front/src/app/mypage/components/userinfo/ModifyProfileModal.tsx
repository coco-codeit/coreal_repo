import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { getUserProfile, updateUserProfile } from "@/apis/profile";
import { UserProfileInterface } from "@/types/common";

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

  useEffect(() => {
    async () => {
      const data: UserProfileInterface = await getUserProfile();
      setFormData({ companyName: data.companyName, image: data.image });
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formData && updateUserProfile(formData);
    closeModal();
  };

  const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData && setFormData({ ...formData, companyName: e.target.value });
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData && setFormData({ ...formData, image: e.target.value });
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      className="fixed inset-0 flex flex-col justify-center items-center"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <DialogPanel className="z-50 max-w-lg space-y-4 bg-white rounded-xl p-12">
        <button onClick={closeModal}>close</button>
        <DialogTitle className="font-bold">프로필 수정</DialogTitle>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            name=""
            id=""
            accept="image/jpeg,image/png"
            onChange={handleChangeImage}
          />
          <div className="flex flex-col">
            <label htmlFor="company">회사</label>
            <input
              type="text"
              name=""
              id="company"
              placeholder="회사명을 입력해주세요"
              onChange={handleChangeCompany}
            />
          </div>
          <div className="flex gap-4">
            <button onClick={closeModal}>취소</button>
            <button type="submit">수정하기</button>
          </div>
        </form>
      </DialogPanel>
    </Dialog>
  );
}
