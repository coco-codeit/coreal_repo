import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { submitReview } from "@/apis/profile";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "./Button";

interface ReviewFormInterface {
  gatheringId: string;
  score: string;
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
    score: "0",
    comment: "",
  });
  const closeModal = () => {
    setOpen?.(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitReview(formData);
    closeModal();
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, score: e.target.value });
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
      <DialogPanel className="z-50 max-w-lg space-y-4 bg-white rounded-xl p-12">
        <button onClick={closeModal}>close</button>
        <DialogTitle className="text-lg font-bold">리뷰 쓰기</DialogTitle>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={gatheringId} name="gatheringId" />
          <Label>만족스러운 경험이었나요?</Label>
          <input type="number" name="score" onChange={handleScoreChange} />
          <Label htmlFor="comment">경험에 대해 남겨주세요.</Label>
          <textarea
            id="comment"
            name="comment"
            onChange={handleCommentChange}
            ref={initialFocusRef}
            className="w-full h-[120px]"
          ></textarea>
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={closeModal}
              className="border-2 border-orange-600 text-orange-600 bg-white"
            >
              취소
            </Button>
            <Button type="submit" className="bg-gray-400 text-white">
              리뷰 등록
            </Button>
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
    <label htmlFor={htmlFor} className="block text-base font-semibold">
      {children}
    </label>
  );
}
