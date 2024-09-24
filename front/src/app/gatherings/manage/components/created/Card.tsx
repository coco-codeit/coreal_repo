import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

interface CardProps {
  id: string;
  title: string;
  location?: string;
  skills?: string[];
  description?: string;
  date?: string;
  time?: string;
  participants?: string; // (현재 인원 / 최대 인원)
  imageUrl?: string;
  participantsList?: { name: string }[];
  onEdit?: () => void;
  onManage?: () => void;
  onApprove?: (participantName: string) => void;
  onReject?: (participantName: string) => void;
}

function Card({
  id,
  title,
  location,
  skills,
  description,
  date,
  time,
  participants,
  imageUrl,
  participantsList,
  onEdit,
  onManage,
  onApprove,
  onReject,
}: CardProps) {
  const [showParticipants, setShowParticipants] = useState(false);
  const router = useRouter();

  return (
    <div className="p-6 rounded-lg bg-white border border-[#DDDCE3] mb-5">
      <div className="flex gap-6">
        {/* 이미지 */}
        <div className="bg-slate-600 w-[320px] h-[172px] rounded-lg overflow-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="모임 이미지"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-row gap-2 mb-2 text-2xl">
            <h3 className="font-medium">{title}</h3>
            <span>|</span>
            <span>{location}</span>
          </div>

          {skills && (
            <div className="flex gap-2 mb-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="py-1 px-4 rounded-full bg-[#FFEDD5] text-[#EA580C]"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {description && <p>{description}</p>}

          <div className="flex flex-row gap-4 mb-4">
            <span>
              {date} · {time}
            </span>
            <span>{participants}</span>
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
            {participantsList && (
              <button onClick={() => setShowParticipants(!showParticipants)}>
                <Image
                  width={38}
                  height={38}
                  alt="caret-down"
                  src="/images/caret-down.svg"
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {showParticipants && participantsList && (
        <div>
          <div className="border-t border-gray-300 my-6"></div>
          {participantsList.map((participant, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 relative">
                <div className="relative">
                  <div className="bg-gray-300 w-[40px] h-[40px] rounded-full flex items-center justify-center"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold">{participant.name}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {onApprove && (
                  <button
                    className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
                    onClick={() => onApprove(participant.name)}
                  >
                    승인하기
                  </button>
                )}
                {onReject && (
                  <button
                    className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
                    onClick={() => onReject(participant.name)}
                  >
                    거절하기
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
