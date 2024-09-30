import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

export default function ReviweModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="fixed inset-0 flex flex-col justify-center items-center"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <DialogPanel className="z-50 max-w-lg space-y-4 bg-white rounded-xl p-12">
        <button onClick={() => setOpen(false)}>close</button>
        <DialogTitle className="font-bold">리뷰 쓰기</DialogTitle>
        <form action="" onSubmit={(e) => e.preventDefault()}></form>
        <label>만족스러운 경험이었나요</label>
        <label htmlFor="comment">경험에 대해 남겨주세요.</label>
        <textarea name="" id="comment"></textarea>
        <div className="flex gap-4">
          <button onClick={() => setOpen(false)}>취소</button>
          <button>리뷰 등록</button>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
