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
import { useToastStore } from "@/stores/useToastStore";
export default function ActionBtnGroup({
  pageId,
  createdBy,
}: {
  pageId: string;
  createdBy: number;
}) {
  const router = useRouter();

  const [isJoined, setIsJoined] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, userInfo } = useAuthStore();
  const { showToast } = useToastStore();

  const { mutate: deleteMutation } = useCreateCancel(pageId);
  const { mutate: joinMutation } = useGatherJoin(pageId);
  const { mutate: cancelJoinMutation } = useGatherjoinCancel(pageId);
  const { data: joinedData } = useGetJoinedGathers();
  const joinedDataArr =
    joinedData?.map((item: { id: number }) => item.id) ?? [];

  const isJoinedGather = joinedDataArr.find((elem: number) => elem === +pageId);
  const isCreatedGather = createdBy === userInfo?.id;

  useEffect(() => {
    if (isLoggedIn) {
      setIsJoined(!!isJoinedGather);
      setIsCreated(!!isCreatedGather);
    }
  }, [pageId, isJoinedGather, isCreatedGather, isLoggedIn]);

  const handleJoinClick = () => {
    if (isLoggedIn && !isJoined) {
      joinMutation();
    } else if (isLoggedIn && isJoined) {
      cancelJoinMutation();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleDeleteClick = () => {
    deleteMutation();
  };

  const handleLoginRedirect = () => {
    setIsModalOpen(false);
    router.push("/signin");
  };

  const handleShareClick = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        showToast("링크 복사성공", "success");
      })
      .catch(() => {
        showToast("에러가 발생했습니다", "error");
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
              {isCreated ? (
                "모임을 공유해서 더 많은 사람들이 참여할 수 있도록 독려해봐요"
              ) : (
                <div className="md:flex">
                  <div>국내 최고 웰니스 전문가와 프로그램을 </div>
                  <div>통해 지친 몸과 마음을 회복해요</div>
                </div>
              )}
            </div>
          </div>
          <div className="px-4 md:mt-0 mt-[10px]">
            {isCreated ? (
              <div className="flex">
                <button
                  className="flex justify-center items-center w-[115px] h-11 rounded-xl text-orange-600 bg-white"
                  onClick={() => handleDeleteClick()}
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
