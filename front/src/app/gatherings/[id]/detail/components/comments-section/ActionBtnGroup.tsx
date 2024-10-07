"use client";

import {
  useGatherCancelMutation,
  useGatherJoinMutation,
} from "@/hooks/queries/gatherDetailQuery";
import React, { useEffect, useState } from "react";
import LoginAlertModal from "@/app/components/LoginAlertModal";
import { useRouter } from "next/navigation";

export default function ActionBtnGroup({ pageId }: { pageId: string }) {
  const [isJoined, setIsJoined] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const { mutate: cancelMutation } = useGatherCancelMutation(pageId);
  const { mutate: joinMutation } = useGatherJoinMutation(pageId);

  useEffect(() => {
    setIsJoined(false);
  }, []);

  const handleJoinClick = () => {
    setIsModalOpen(true);
  };

  const handleLoginRedirect = () => {
    setIsModalOpen(false);
    router.push("/signin");
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
            {isJoined ? (
              <div className="flex">
                <button
                  className="flex justify-center items-center w-[115px] h-11 rounded-xl text-orange-600 bg-white"
                  onClick={() => cancelMutation()}
                >
                  취소하기
                </button>
                <button
                  className="flex justify-center items-center w-[115px] h-11 rounded-xl bg-orange-600 text-white"
                  onClick={() => joinMutation()}
                >
                  공유하기
                </button>
              </div>
            ) : (
              <button
                className="flex justify-center items-center w-[115px] h-11 rounded-xl bg-orange-600 text-white"
                onClick={handleJoinClick}
              >
                참여하기
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
