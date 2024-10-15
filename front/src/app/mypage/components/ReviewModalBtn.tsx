import { useState } from "react";
import Button from "./Button";
import ReviweModal from "./ReviewModal";

export default function ReviewModalBtn({
  gatheringId,
}: {
  gatheringId: string | number;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        className="border-2 bg-white border-gray-900 hover:border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-green-2"
        onClick={() => setIsModalOpen(true)}
      >
        리뷰 작성하기
      </Button>
      <ReviweModal
        gatheringId={String(gatheringId)}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
    </>
  );
}
