// import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { WiTime5 } from "react-icons/wi";
import { BsArrowDown } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

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
    position: string;
  }[];
  type: "study" | "project";
  onEdit?: () => void;
  onManage?: () => void;
  onApprove?: (participantName: string) => void;
  onReject?: (participantName: string) => void;
}

function Card({
  // id,
  title,
  skills,
  content,
  imageUrl,
  // onCancel,
  recruitment,
  onApprove,
  onReject,
}: CardProps) {
  const [showParticipants, setShowParticipants] = useState(false);
  // const router = useRouter();

  const defaultImage = "/images/arrow-up.svg"; // 임시 이미지

  // const badgeColor = type === "study" ? "bg-green-200" : "bg-blue-200";
  // const badgeText = type === "study" ? "스터디" : "프로젝트";

  return (
    <div className=" text-display-1 rounded-lg bg-white border border-[#DDDCE3] mb-5 md:p-6 p-4 ">
      <div className="flex gap-4">
        <div className="bg-slate-600 flex-shrink-0 w-[80px] h-[80px] md:w-[130px] md:h-[130px] lg:w-[199px] lg:h-[130px] rounded-2xl overflow-hidden">
          <Image
            src={imageUrl && imageUrl !== "string" ? imageUrl : defaultImage}
            layout="responsive"
            alt="main_image"
            width={199}
            height={130}
            objectFit="cover"
          />
        </div>

        <div className="flex justify-center  flex-col  w-full text-caption font-body">
          {/* 뱃지
           <div
            className={`inline-block px-4 py-1 mb-2 rounded-full ${badgeColor} self-start`}
          >
            {badgeText}
          </div>
           */}

          {/* 스킬 - 제목 위 */}
          <div className="flex flex-col w-full ">
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

            <h3 className="font-title flex flex-row gap-2 mb-2 md:text-headline text-subhead-3">
              {title}
            </h3>

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
        </div>
        {/* 대기 상태 신청자 아코디언 토글 버튼 */}
        <div className="flex justify-end items-end">
          {recruitment && (
            <button onClick={() => setShowParticipants(!showParticipants)}>
              {showParticipants ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          )}
        </div>
      </div>

      {showParticipants && recruitment && recruitment.length > 0 && (
        <div className="border-t border-gray-6 mt-6 pt-6 md:text-body-2 text-body-1 font-body text-gray-15">
          <ul className="hidden  lg:w-full lg:flex lg:gap-28 lg:py-5 lg:pr-4 lg:pl-11 lg:border-b lg:border-gray-6 lg:text-center lg:list-none">
            <li>프로필</li>
            <li className="mr-4">이름</li>
            <li className="mr-7">직무</li>
            <li className="flex items-center">
              <span>
                <WiTime5 className="text-headline" />
              </span>
              <span>
                <BsArrowDown className="text-subhead-3" />
              </span>
            </li>
            <li className="ml-auto">
              <button className="flex items-center">
                더보기
                <span className="text-display-1">
                  <GrFormNext />
                </span>
              </button>
            </li>
          </ul>

          <div className="space-y-4 lg:space-y-0">
            {recruitment.map((participant, index) => (
              <ul
                key={index}
                className="px-4 gap-3 py-4 md:py-6 border border-gray-6 lg:border-0 rounded-lg w-full flex lg:gap-28 lg:py-5 lg:pr-4 lg:pl-11 items-center lg:border-b lg:border-gray-4 text-center list-none"
              >
                <li className="mr-1">
                  <Image
                    src={participant.userProfileImage || "/images/profile.png"}
                    alt={`${participant.userNickname}의 프로필 이미지`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </li>
                <li>{participant.userNickname}</li>
                <li className="hidden lg:block">{participant.position}</li>
                <li className="hidden lg:block">24.09.24</li>
                <li className="ml-auto">
                  <div className="flex gap-2 text-body-1 md:text-subhead-3 font-title">
                    {onApprove && (
                      <button
                        className="w-[58px] px-[14px] py-[5px] md:w-[78px] md:px-6 md:py-2 rounded-lg bg-purple-4 text-white"
                        onClick={() => onApprove(participant.userNickname)}
                      >
                        승인
                      </button>
                    )}
                    {onReject && (
                      <button
                        className="w-[58px] px-[14px] py-[5px] md:w-[78px] md:px-5 md:py-2 rounded-lg bg-white text-gray-10 border border-gray-10"
                        onClick={() => onReject(participant.userNickname)}
                      >
                        거절
                      </button>
                    )}
                  </div>
                </li>
              </ul>
            ))}
          </div>
          <button className=" lg:hidden text-white bg-gray-7 rounded-lg w-full py-[10px] mt-5 ">
            더보기
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
