import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

export default function ModifyProfileModal({
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
        <DialogTitle className="font-bold">프로필 수정</DialogTitle>
        <form action="" onSubmit={(e) => e.preventDefault()}></form>
        <input type="file" name="" id="" accept="image/jpeg,image/png" />
        <div className="flex flex-col">
          <label htmlFor="company">회사</label>
          <input
            type="text"
            name=""
            id="company"
            placeholder="회사명을 입력해주세요"
          />
        </div>
        <div className="flex gap-4">
          <button onClick={() => setOpen(false)}>취소</button>
          <button>수정하기</button>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
