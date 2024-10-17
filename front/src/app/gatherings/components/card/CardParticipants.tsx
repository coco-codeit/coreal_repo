import Image from "next/image";
import ConfirmBadge from "@/app/gatherings/components/ConfirmBadge";
import ProgressBar from "@/app/gatherings/components/ProgressBar";
import { PersonIcon } from "@/app/gatherings/components/list/Icons";
import { useMemo, useState, useEffect } from "react";

function CardParticipants({
  dateTime,
  participantCount,
  capacity,
}: {
  dateTime: string;
  participantCount: number;
  capacity: number;
}) {
  const percent = (participantCount / capacity) * 100;
  const isFull = participantCount >= capacity;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isClosed = useMemo(() => {
    if (!isMounted) return false;

    const now = new Date();
    const endDate = new Date(dateTime);

    return endDate < now || isFull;
  }, [dateTime, isFull, isMounted]);

  return (
    <div className="flex justify-between md:pr-2 items-end mt-2">
      <div className="grid w-full max-w-[197px] md:max-w-[255px] lg:max-w-[556px]">
        <div className="flex flex-row gap-2 items-center h-6">
          <div className="flex flex-row gap-[2px] py-[2px] h-[20px] items-center">
            <PersonIcon isFull={isFull} />
            <span
              className={`text-sm ${isFull ? "text-purple-2" : "text-gray-700"}`}
            >
              {participantCount}/{capacity}
            </span>
          </div>
          {!isFull && participantCount >= 5 && <ConfirmBadge />}
        </div>

        <div className="flex items-start -mt-2 -mb-2">
          <ProgressBar percent={percent} />
        </div>
      </div>
      <div className="flex gap-2 items-center font-semibold">
        {isClosed ? (
          <span className="text-purple-2">closed</span>
        ) : (
          <div className="flex gap-2 items-center">
            <span className="text-purple-3">join now</span>
            <Image
              src="/images/card/arrow_right.svg"
              alt="arrow"
              width={18}
              height={18}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CardParticipants;
