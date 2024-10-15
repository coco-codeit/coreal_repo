import Image from "next/image";
import ConfirmBadge from "@/app/gatherings/components/ConfirmBadge";
import ProgressBar from "@/app/gatherings/components/ProgressBar";

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

  const now = new Date();
  const endDate = new Date(dateTime);
  const isClosed = endDate < now || participantCount >= capacity;

  return (
    <div className="flex justify-between md:pr-2 items-end mt-2">
      <div className="grid w-full max-w-[197px] md:max-w-[255px] lg:max-w-[556px] ">
        <div className="flex flex-row gap-2 items-center h-6">
          <div className="flex flex-row gap-[2px] py-[2px] h-[20px] items-center">
            <Image
              src="/images/card/person.svg"
              alt="person"
              width={16}
              height={16}
            />
            <span className="text-sm text-gray-700">
              {participantCount}/{capacity}
            </span>
          </div>
          {participantCount >= 5 && <ConfirmBadge />}
        </div>

        <div className="flex items-start -mt-1 -mb-2">
          <ProgressBar percent={percent} />
        </div>
      </div>
      <div
        className="flex gap-2 items-center font-semibold"
        suppressHydrationWarning
      >
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
