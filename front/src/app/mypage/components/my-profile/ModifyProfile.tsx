"use client";

import { useState } from "react";
import ModifyProfileModal from "./ModifyProfileModal";

export default function ModifyProfile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>프로필 수정</button>
      <ModifyProfileModal open={isOpen} setOpen={setIsOpen} />
    </>
  );
}
