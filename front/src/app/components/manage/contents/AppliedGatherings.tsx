"use client";

interface GatheringData {
  status?: string; // 모임 상태
  confirmation?: string; // 개설 상태
  title?: string; // 모임 제목
  location?: string; // 장소
  date?: string; // 날짜
  time?: string; // 시간
  participants?: string; // 참여 인원 수 (현재 인원 / 최대 인원)
  imageUrl?: string; // 이미지 URL
  onCancel?: () => void; // 모임 취소 버튼
}

function AppliedGatherings({
  status = "이용 예정",
  confirmation = "개설 확정",
  title = "스터디 모임 제목",
  location = "장소",
  date = "9월 9일",
  time = "17:50",
  participants = "20/20",
  imageUrl,
  onCancel,
}: GatheringData) {
  return (
    <div className="flex flex-row h-[220px] p-6 items-start gap-6 rounded-lg bg-white border border-[#DDDCE3]">
      {/* 이미지 */}
      <div className="bg-slate-600 w-[320px] h-[172px] rounded-lg overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Gathering Image"
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-row justify-start items-center gap-2 mb-3">
          <p className="px-3 py-[6px] bg-[#FFEDD5] rounded-3xl text-[#EA580C] text-center">
            {status}
          </p>
          <p className="px-3 py-[6px] bg-white border border-[#FFEDD5] rounded-3xl text-[#EA580C] text-center">
            {confirmation}
          </p>
        </div>

        <div className="flex flex-row gap-2 mb-2">
          <p className="font-medium">{title}</p>
          <span>|</span>
          <span>{location}</span>
        </div>

        <div className="flex flex-row gap-4 mb-4">
          <span>
            {date} · {time}
          </span>
          <span>{participants}</span>
        </div>

        <button
          className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
          onClick={onCancel}
        >
          취소하기
        </button>
      </div>
    </div>
  );
}

export default AppliedGatherings;
