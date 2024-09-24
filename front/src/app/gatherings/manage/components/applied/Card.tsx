import Image from "next/image";

interface CardProps {
  title: string;
  connection: string;
  skills?: string[];
  content?: string;
  startDateTime: string;
  participant: number;
  capacity: number;
  imageUrl?: string;
  onCancel?: () => void;
  recruitment?: { field: string; participant: number; capacity: number }[];
  type: "study" | "project";
}

function Card({
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
}: CardProps) {
  const defaultImage = "/images/profile.png"; // 임시 이미지

  return (
    <div className="flex flex-row p-6 items-start gap-6 rounded-lg bg-white border border-[#DDDCE3] mb-5">
      {/* 이미지 */}
      <div className="bg-slate-600 w-[320px] h-[172px] rounded-lg overflow-hidden relative">
        <Image
          src={imageUrl && imageUrl !== "string" ? imageUrl : defaultImage}
          alt="image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col flex-1">
        <div
          className={`px-4 py-1 mb-2 rounded-full self-start ${
            type === "study" ? "bg-green-200" : "bg-blue-200"
          }`}
        >
          {type === "study" ? "스터디" : "프로젝트"}
        </div>

        <div className="flex flex-row gap-2 mb-2 text-2xl">
          <p className="font-medium">{title}</p>
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

        <div className="flex flex-row gap-4 mb-2">
          <p className="flex gap-2">
            {`${new Date(startDateTime).getMonth() + 1}월 ${new Date(startDateTime).getDate()}일`}
            <span>·</span>
            {new Date(startDateTime).toLocaleTimeString("ko-KR", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </p>
          <span>{`${participant}/${capacity}`}</span>
        </div>

        {recruitment && (
          <div className="flex flex-row gap-2 mb-3">
            {recruitment.map((role, index) => (
              <span key={index}>
                {role.field}: {role.participant}/{role.capacity}
              </span>
            ))}
          </div>
        )}

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

export default Card;
