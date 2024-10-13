import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import CreateGatheringModal from "@/app/gatherings/list/components/create/CreateGatheringModal";
import Button from "@/app/gatherings/components/Button";

function CreateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const openModal = () => {
    if (session) {
      setIsOpen(true);
    } else {
      signIn();
    }
  };
  return (
    <>
      <Button
        className="font-semibold px-[18px] md:px-[21px] py-[10px] "
        style="solid"
        size="responsive"
        onClick={openModal}
      >
        모임 만들기
      </Button>
      {isOpen && (
        <CreateGatheringModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
export default CreateButton;
