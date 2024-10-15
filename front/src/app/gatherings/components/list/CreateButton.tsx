import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useToastStore } from "@/stores/useToastStore";
import Button from "@/app/gatherings/components/Button";
import CreateGatheringModal from "@/app/gatherings/components/create/CreateGatheringModal";

function CreateButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const { showToast } = useToastStore();

  const openModal = () => {
    if (session) {
      setIsOpen(true);
    } else {
      showToast("로그인 후 이용이 가능합니다.", "error");
      localStorage.setItem("shouldOpenModal", "true");
      setTimeout(() => {
        signIn();
      }, 400);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      const shouldOpenModal = localStorage.getItem("shouldOpenModal");
      if (shouldOpenModal) {
        setIsOpen(true);
        localStorage.removeItem("shouldOpenModal");
      }
    }
  }, [status]);

  return (
    <>
      <Button
        className="font-semibold px-[18px] md:px-[21px] py-[10px]"
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
