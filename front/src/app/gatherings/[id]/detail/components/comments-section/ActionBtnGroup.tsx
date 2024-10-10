"use client";

type JoinedListItem = {
  id: string;
};

import {
  useGatherjoinCancel,
  useCreateCancel,
  useGatherJoin,
} from "@/hooks/queries/gatherDetailQuery";
import React, { useEffect, useState } from "react";
import LoginAlertModal from "@/app/components/LoginAlertModal";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/useAuthStore";
import { useGatherJoined } from "@/hooks/queries/mypage";

export default function ActionBtnGroup({ pageId }: { pageId: string }) {
  const [isJoined, setIsJoined] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();

  const { mutate: deleteMutation } = useCreateCancel(pageId);
  const { mutate: joinMutation } = useGatherJoin(pageId);
  const { mutate: cancelJoinMutation } = useGatherjoinCancel(pageId);
  const { data: joinedGatherList } = useGatherJoined();
  console.log(joinedGatherList);
  const joinedListIdArr = (joinedGatherList as JoinedListItem[])?.map(
    (item) => item.id,
  );
  const isJoinedGather = joinedListIdArr?.find((elem) => elem === pageId);

  useEffect(() => {
    isJoinedGather && setIsJoined(true);
    setIsCreated(false);
    // userId && setIsCreated(true);
  }, [pageId, isJoinedGather]);

  const handleJoinClick = () => {
    if (isLoggedIn && !isJoined) {
      joinMutation();
    } else if (isLoggedIn && isJoined) {
      cancelJoinMutation();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleLoginRedirect = () => {
    setIsModalOpen(false);
    router.push("/signin");
  };

  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      // setIsCopied(true);
      // setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full h-[84px] border-t-2 border-black bg-white z-10">
        <div className="flex items-center justify-between max-w-[996px] mx-auto h-full">
          <div>
            <h3>더 건강한 나와 팀을 위한 프로그램 🏃‍️️</h3>
            <div>
              모임을 공유해서 더 많은 사람들이 참여할 수 있도록 독려해봐요
            </div>
          </div>
          <div>
            {isCreated ? (
              <div className="flex">
                <button
                  className="flex justify-center items-center w-[115px] h-11 rounded-xl text-orange-600 bg-white"
                  onClick={() => deleteMutation()}
                >
                  취소하기
                </button>
                <button
                  className="flex justify-center items-center w-[115px] h-11 rounded-xl bg-orange-600 text-white"
                  onClick={() => handleShareClick()}
                >
                  공유하기
                </button>
              </div>
            ) : (
              <button
                className="flex justify-center items-center w-[115px] h-11 rounded-xl bg-orange-600 text-white"
                onClick={handleJoinClick}
              >
                {isJoined ? "참여 취소하기" : "참여하기"}
              </button>
            )}
          </div>
        </div>
      </div>

      <LoginAlertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="로그인이 필요해요"
        onConfirm={handleLoginRedirect}
      />
    </>
  );
}
