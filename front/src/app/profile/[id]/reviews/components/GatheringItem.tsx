import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import UserReviews from "./UserReviews";
import { GatheringItemInterface } from "@/types/common";
import ReviewForm from "./ReviewForm";
import useModal from "@/hooks/useModal";

const DefaultUserImage = "/images/default_user.webp";

export default function GatheringItem({
  className,
  gathering,
}: {
  className: string;
  gathering: GatheringItemInterface;
}) {
  const { Modal, isOpen, setIsOpen } = useModal();
  const handleClickReviewBtn = () => setIsOpen(!isOpen);
  return (
    <div className={className}>
      <Disclosure>
        <div className="flex flex-row gap-4">
          <Image
            src={DefaultUserImage} // gathering 주소 변경 필요
            width={144}
            height={108}
            alt="모임 대표 이미지"
            className="bg-gray-5 rounded-lg"
          />
          <div className="flex flex-col justify-between flex-grow">
            <h5 className="font-bold">{gathering?.gatheringName}</h5>
            <div className="relative w-full">
              <div>
                {gathering?.stacks.map((tech, index) => (
                  <TechTag key={`${tech}-${index}`} tech={tech} />
                ))}
              </div>
              <DisclosureButton className="absolute top-0 right-0">
                {({ open }: { open: boolean }) =>
                  open ? <>리뷰 닫기</> : <>리뷰 펼치기</>
                }
              </DisclosureButton>

              <button
                className="py-1 px-2 border rounded-lg bg-gray-6"
                onClick={handleClickReviewBtn}
              >
                리뷰 작성
              </button>
              <Modal className="bg-white rounded-lg py-6 px-10 min-w-[300px]">
                <ReviewForm userId="사용자" setIsOpen={setIsOpen} />
              </Modal>
            </div>
          </div>
        </div>
        <DisclosurePanel>
          <UserReviews gatheringId={1} />
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}

function TechTag({ tech }: { tech: string }) {
  return <span className="px-2 mr-1 rounded-xl bg-gray-5">{tech}</span>;
}
