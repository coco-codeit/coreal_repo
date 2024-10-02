import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

interface CardProps {
  id: string;
  title: string;
  connection: string;
  skills?: string[];
  content?: string;
  startDateTime: string;
  participant: number;
  capacity: number;
  imageUrl?: string;
  onCancel?: () => void;
  recruitment?: {
    userId: number;
    userNickname: string;
    userProfileImage: string;
  }[];
  type: "study" | "project";
  onEdit?: () => void;
  onManage?: () => void;
  onApprove?: (participantName: string) => void;
  onReject?: (participantName: string) => void;
}

function Card({
  id,
  title,
  connection,
  skills,
  content,
  startDateTime,
  participant,
  capacity,
  imageUrl,
  onCancel,
  recruitment,
  type,
  onEdit,
  onManage,
  onApprove,
  onReject,
}: CardProps) {
  const [showParticipants, setShowParticipants] = useState(false);
  const router = useRouter();

  const defaultImage = "/images/profile.png";

  const badgeColor = type === "study" ? "bg-green-200" : "bg-blue-200";
  const badgeText = type === "study" ? "스터디" : "프로젝트";

  return (
    <div className="p-6 rounded-lg bg-white border border-[#DDDCE3] mb-5">
      <div className="flex gap-6">
        <div className="bg-slate-600 w-[320px] h-[172px] rounded-lg overflow-hidden relative">
          <Image
            src={imageUrl && imageUrl !== "string" ? imageUrl : defaultImage}
            alt="모임 이미지"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex-1">
          <div
            className={`inline-block px-4 py-1 mb-2 rounded-full ${badgeColor} self-start`}
          >
            {badgeText}
          </div>

          <div className="flex flex-row gap-2 mb-2 text-2xl">
            <h3 className="mb-2 font-medium">{title}</h3>
            <span>|</span>
            <span>{connection === "online" ? "온라인" : "오프라인"}</span>
          </div>

          {skills && (
            <div className="flex gap-2 mb-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1 rounded-full bg-[#FFEDD5] text-[#EA580C]"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {content && <p>{content}</p>}

          <div className="flex flex-row gap-4 mb-4">
            <span>
              {`${new Date(startDateTime).getMonth() + 1}월 ${new Date(startDateTime).getDate()}일`}
              <span>·</span>
              {new Date(startDateTime).toLocaleTimeString("ko-KR", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
            <span>{`${participant}/${capacity}`}</span>
          </div>

          <div className="flex flex-row justify-between">
            {(onEdit || onManage) && (
              <div className="flex flex-row justify-start gap-3">
                {onEdit && (
                  <button
                    className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
                    onClick={onEdit}
                  >
                    수정하기
                  </button>
                )}
                {onManage && (
                  <button
                    className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
                    onClick={() => router.push(`/gatherings/manage/${id}`)}
                  >
                    관리하기
                  </button>
                )}
              </div>
            )}

            {recruitment && (
              <button onClick={() => setShowParticipants(!showParticipants)}>
                <Image
                  width={24}
                  height={24}
                  alt={showParticipants ? "arrow-up" : "arrow-down"}
                  src={
                    showParticipants
                      ? "/images/arrow-up.svg"
                      : "/images/arrow-down.svg"
                  }
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {showParticipants && recruitment && recruitment.length > 0 && (
        <div className="border-t border-gray-300 mt-6">
          {recruitment.map((participant, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-y-5"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-start gap-2">
                  <Image
                    src={participant.userProfileImage || "/images/profile.png"}
                    alt={`${participant.userNickname}의 프로필 이미지`}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span className="flex items-center">
                    {participant.userNickname}
                  </span>
                </div>
                <div className="w-56 h-2 bg-slate-500 rounded-full"></div>
              </div>

              <div className="flex flex-col gap-2">
                {onApprove && (
                  <button
                    className="w-[120px] p-2 rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
                    onClick={() => onApprove(participant.userNickname)}
                  >
                    승인하기
                  </button>
                )}
                {onReject && (
                  <button
                    className="w-[120px] p-2 rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
                    onClick={() => onReject(participant.userNickname)}
                  >
                    거절하기
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {onCancel && (
        <button
          className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
          onClick={onCancel}
        >
          취소하기
        </button>
      )}
    </div>
  );
}

export default Card;
