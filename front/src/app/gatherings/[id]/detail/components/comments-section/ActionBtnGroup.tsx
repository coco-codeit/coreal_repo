import React from "react";

export default function ActionBtnGroup() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[84px] border-t-2 border-black bg-white z-10">
      <div className="flex items-center justify-between max-w-[996px] mx-auto h-full">
        <div>
          <h3>더 건강한 나와 팀을 위한 프로그램 🏃‍️️</h3>
          <div>
            모임을 공유해서 더 많은 사람들이 참여할 수 있도록 독려해봐요
          </div>
        </div>
        <div>
          <button className="flex justify-center items-center w-[115px] h-11 rounded-xl bg-orange-600 text-white">
            참여하기
          </button>
        </div>
      </div>
    </div>
  );
}
