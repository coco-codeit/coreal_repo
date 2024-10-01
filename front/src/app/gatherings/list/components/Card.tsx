import Image from "next/image";
import { format } from "date-fns";
import { BsPersonFill } from "react-icons/bs";
import { LuArrowRight } from "react-icons/lu";
import { Gatherings } from "@/app/types/gatherings";
import LikeButton from "@/app/gatherings/components/LikeButton";
import DateTag from "@/app/gatherings/components/DateTag";
import ConfirmBadge from "@/app/gatherings/components/ConfirmBadge";
import ProgressBar from "@/app/gatherings/components/ProgressBar";

interface CardProps {
  data: Gatherings[];
}

function Card({ data }: CardProps) {
  return (
    <div className="grid grid-cols-1 gap-6 py-6 w-full">
      {data.length > 0
        ? data.map((item) => {
            // 월/일, 시/분을 각각 포맷
            const formattedDate = format(new Date(item.dateTime), "M월 dd일");
            const formattedTime = format(new Date(item.dateTime), "HH:mm");

            return (
              <div
                key={item.id}
                className="h-[316px] md:h-[156px] grid grid-rows-[156px_1fr] md:grid-cols-[280px_1fr]"
              >
                <div className="relative w-full rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} 대표이미지`}
                    fill={true}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col border-2 border-gray-100 py-4 px-4 md:pl-6 rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl">
                  <div className="flex justify-between mb-[20px] md:mb-[21px]">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row justify-start items-center gap-2">
                        <span className="text-lg text-gray-800">
                          {item.name}
                        </span>
                        <span className="text-lg text-gray-900">|</span>
                        <span className="text-body-1 text-gray-700">
                          {item.location}
                        </span>
                      </div>
                      <div className="flex">
                        <DateTag dateText={formattedDate} textColor="#EA580C" />
                        <DateTag dateText={formattedTime} textColor="white" />
                      </div>
                    </div>
                    <LikeButton />
                  </div>

                  <div className="flex justify-between md:pr-2 items-end mt-2">
                    <div className="grid w-full max-w-[197px] md:max-w-[255px] lg:max-w-[556px] ">
                      <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-row gap-[2px] py-[2px] h-[20px]">
                          <BsPersonFill className="w-4 h-4 text-gray-700" />
                          <span className="text-body-1 leading-[18px] text-gray-700">
                            {item.participantCount}/{item.capacity}
                          </span>
                        </div>
                        {item.participantCount >= 5 && <ConfirmBadge />}
                      </div>

                      <div className="flex items-start -mt-1 -mb-2">
                        <ProgressBar
                          percent={
                            (item.participantCount / item.capacity) * 100
                          }
                        />
                      </div>
                    </div>
                    <div className="flex items-end gap-2 h-6">
                      <span className="text-orange-600 leading-none">
                        join now
                      </span>
                      <LuArrowRight className="text-orange-600 w-[18px] h-[18px]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Card;
