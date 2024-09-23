import Image from "next/image";

interface CardProps {
  title: string;
  location: string;
  skills?: string[];
  description?: string;
  date: string;
  time: string;
  participants: string; // (현재 인원 / 최대 인원)
  imageUrl?: string;
  onCancel?: () => void;
}

function Card({
  title,
  location,
  skills,
  description,
  date,
  time,
  participants,
  imageUrl,
  onCancel,
}: CardProps) {
  return (
    <div className="flex flex-row h-[220px] p-6 items-start gap-6 rounded-lg bg-white border border-[#DDDCE3] mb-5">
      {/* 이미지 */}
      <div className="bg-slate-600 w-[320px] h-[172px] rounded-lg overflow-hidden relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Gathering Image"
            layout="fill"
            objectFit="cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-row gap-2 mb-2 text-2xl">
          <p className="font-medium ">{title}</p>
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

        {onCancel && (
          <button
            className="w-[120px] p-2 flex justify-center items-center rounded-xl border border-[#EA580C] bg-white text-[#EA580C]"
            onClick={onCancel}
          >
            취소하기
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
