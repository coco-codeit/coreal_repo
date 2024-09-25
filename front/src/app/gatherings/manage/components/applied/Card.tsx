/**
 * 스킬 뱃지 레이아웃 작업 관련:
 * 모바일 및 태블릿 크기에서 스킬 뱃지를 제목 위에 위치
 * 데스크탑 크기에서 스킬뱃지를 모임명의 아래, 모임명 설명의 왼쪽에 위치
 */
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
function Card({ title, skills, content, imageUrl, onCancel }: CardProps) {
  const defaultImage = "/images/arrow-up.svg"; // 임시 이미지

  return (
    <div className="text-display-1 lg:items-center md:items-start text-gray-15 relative w-full md:p-6 p-4 flex flex-row gap-4 rounded-lg bg-white border border-[#DDDCE3] mb-5">
      {/* 이미지 */}
      <div className="bg-slate-600 flex-shrink-0 w-[80px] h-[80px] md:w-[130px] md:h-[130px] lg:w-[199px] lg:h-[130px]  rounded-2xl overflow-hidden ">
        <Image
          src={imageUrl && imageUrl !== "string" ? imageUrl : defaultImage}
          layout="responsive"
          alt="main_image"
          width={199}
          height={130}
          objectFit="cover"
        />
      </div>

      <div className="flex items-center lg:flex-row flex-col  w-full text-caption font-body">
        {/* 스킬 - 제목 위 */}
        <div className="flex flex-col flex-1 w-full ">
          <div className="lg:hidden flex flex-col gap-2 mb-2">
            {skills && (
              <div className="flex flex-row flex-wrap gap-2 text-subhead-1  items-center">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="flex justify-center items-center px-2 py-[2px] h-5 rounded-2xl bg-gray-6"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="font-title flex flex-row gap-2 mb-2 md:text-headline text-subhead-3">
            <p>{title}</p>
          </div>

          <div className="flex flex-row text-caption font-body ">
            {/* 스킬 - 모임명의 아래, 모임 설명의 왼쪽 */}
            <div className="hidden lg:flex flex-row flex-wrap gap-2 text-subhead-1  items-center">
              {skills && (
                <>
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="flex justify-center items-center px-2 py-[2px] h-5 rounded-2xl bg-gray-6"
                    >
                      {skill}
                    </span>
                  ))}
                </>
              )}
            </div>
            {content && (
              <p className="lg:ml-2 lg:text-body-2 text-body-1">{content}</p>
            )}
          </div>
        </div>

        <div className="mt-[22px] w-full lg:w-auto flex lg:flex-col flex-row items-center lg:items-center lg:gap-0 gap-2 lg:text-body-2 text-body-1 font-body justify-end text-gray-10 ">
          <span className="lg:mb-3 mb-0">승인 대기 중</span>
          <button
            className="h-[32px] w-[76px] md:w-[102px] lg:h-[48px] text-center lg:rounded-xl rounded-lg border border-gray-10 "
            onClick={onCancel}
          >
            신청취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
