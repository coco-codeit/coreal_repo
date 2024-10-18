import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { submitReview } from "@/apis/profile";
import { IoIosHeart } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";

interface ReviewFormInterface {
  gatheringId: string;
  score: number;
  comment: string;
}
export default function ReviweModal({
  gatheringId,
  open,
  setOpen,
}: {
  gatheringId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const initialFocusRef = useRef(null);
  const [formData, setFormData] = useState<ReviewFormInterface>({
    gatheringId,
    score: 0,
    comment: "",
  });
  const closeModal = () => {
    setOpen?.(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    submitReview(formData);
    closeModal();
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, score: Number(e.target.value) });
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, comment: e.target.value });
  };

  return (
    <Dialog
      initialFocus={initialFocusRef}
      open={open}
      onClose={() => setOpen(false)}
      className="fixed inset-0 flex flex-col justify-center items-center"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <DialogPanel className="z-50 space-y-4 bg-white rounded-xl p-6 w-[90vw] max-w-[400px]">
        <DialogTitle className="text-lg font-bold relative">
          리뷰 쓰기
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 rounded-full p-1 hover:bg-gray-100 active:bg-gray-50"
          >
            <IoCloseOutline />
          </button>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={gatheringId} name="gatheringId" />
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <Label>만족스러운 경험이었나요?</Label>
              <ul className="flex flex-row gap-1">
                {Array.from({ length: 5 })
                  .fill(0)
                  .map((_, i) => (
                    <label key={`input-radio-${i}`}>
                      <IoIosHeart
                        className={`cursor-pointer ${formData.score >= i + 1 ? "text-red-600" : "text-[#E5E7EB]"}`}
                        size={"1.25rem"}
                      />
                      <input
                        value={i + 1}
                        type="radio"
                        name="rating"
                        className="hidden"
                        onChange={handleScoreChange}
                      />
                    </label>
                  ))}
              </ul>
            </div>
            <div>
              <Label htmlFor="comment">경험에 대해 남겨주세요.</Label>
              <textarea
                id="comment"
                name="comment"
                onChange={handleCommentChange}
                ref={initialFocusRef}
                placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다."
                className="w-full h-[120px] bg-gray-50 rounded-xl resize-none py-2 px-3"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 font-semibold">
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
                리뷰 등록
              </Button>
            </div>
          </div>
        </form>
      </DialogPanel>
    </Dialog>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children?: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-base font-semibold mb-2">
      {children}
    </label>
  );
}
