import Image from "next/image";

export default function Card({
  data,
}: {
  data: {
    id?: string; // 모임id
    type?: string;
    thumbnailUrl?: string;
    title?: string;
    date?: string;
    time?: string;
    location?: string;
    userStatus?: string; // 유저 상태 => 신청 중, 승인 완료, 승인 거절
    gatherStatus?: string; // 모임 상태 => 개설확정, 개설 진행중, 취소 등
  };
}) {
  return (
    <div className="flex flex-row">
      <Image
        src={""}
        width={100}
        height={100}
        alt="thumbnail"
        className="flex-none"
      />
      <div className="flex-grow">
        <p>
          {data?.title} | <span>{data?.location}</span>
        </p>
        <p>
          {`${data?.date} ${data?.time}`} <span>20/20</span>
        </p>
      </div>
    </div>
  );
}
