import { useState } from "react";
import Button from "./Button";
import ReviweModal from "./ReviewModal";

export default function ReviewModalBtn({
  teamId,
}: {
  teamId: string | number;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Button
        className="bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white"
        onClick={() => setIsModalOpen(true)}
      >
        리뷰 작성하기
      </Button>
      <ReviweModal
        gatheringId={String(teamId)}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
    </>
  );
}
