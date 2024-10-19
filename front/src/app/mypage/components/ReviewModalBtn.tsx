import { useState } from "react";
import Button from "./Button";
import ReviweModal from "./ReviewModal";

export default function ReviewModalBtn({
  gatheringId,
  isReviewed,
}: {
  gatheringId: string | number;
  isReviewed: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClickButton = () => {
    !isReviewed && setIsModalOpen(true);
  };

  return (
    <>
      <Button
        className={`border-2 bg-white  ${!isReviewed ? "border-gray-900 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-green-2" : "cursor-default border-gray-300 text-gray-500"}`}
        onClick={handleClickButton}
      >
        {!isReviewed ? "리뷰 작성하기" : "리뷰 작성완료"}
      </Button>
      <ReviweModal
        gatheringId={String(gatheringId)}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
    </>
  );
}
