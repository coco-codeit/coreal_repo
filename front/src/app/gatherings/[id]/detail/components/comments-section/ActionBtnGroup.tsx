"use client";

import {
  useGatherjoinCancel,
  useCreateCancel,
  useGatherJoin,
  useGetJoinedGathers,
} from "@/hooks/queries/gatherDetailQuery";
import React, { useEffect, useState } from "react";
import LoginAlertModal from "@/app/components/LoginAlertModal";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/useAuthStore";

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
  const { data: joinedData } = useGetJoinedGathers();

  const joinedDataArr =
    joinedData?.map((item: { id: number }) => item.id) ?? [];

  const isJoinedGather = joinedDataArr.find((elem: number) => elem === +pageId);

  useEffect(() => {
    setIsJoined(!!isJoinedGather);
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
      <div className="fixed bottom-0 left-0 w-full min-h-[84px]  border-t-2 border-black bg-white z-10 ">
        <div className="block md:flex items-center justify-between max-w-[996px] my-5 mx-auto h-full">
          <div className="px-6">
            <h3 className="font-semibold">
              더 건강한 나와 팀을 위한 프로그램 🏃‍️️
            </h3>
            <div className="text-[12px]">
              모임을 공유해서 더 많은 사람들이 참여할 수 있도록 독려해봐요
            </div>
          </div>
          <div className="px-4 md:mt-0 mt-[10px]">
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
