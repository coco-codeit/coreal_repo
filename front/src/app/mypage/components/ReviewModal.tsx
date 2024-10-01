import { Dispatch, SetStateAction, useRef, useState } from "react";
import { submitReview } from "@/apis/profile";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

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
        <DialogTitle className="font-bold">리뷰 쓰기</DialogTitle>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={gatheringId} name="gatheringId" />
          <label>만족스러운 경험이었나요</label>
          <input type="number" name="score" onChange={handleScoreChange} />
          <label htmlFor="comment">경험에 대해 남겨주세요.</label>
          <textarea
            id="comment"
            name="comment"
            onChange={handleCommentChange}
            ref={initialFocusRef}
          ></textarea>
          <div className="flex gap-4">
            <button onClick={closeModal}>취소</button>
            <button type="submit">리뷰 등록</button>
          </div>
        </form>
      </DialogPanel>
    </Dialog>
  );
}
