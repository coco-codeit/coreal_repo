import { BsPersonFill } from "react-icons/bs";
import { LuArrowRight } from "react-icons/lu";
import ConfirmBadge from "@/app/gatherings/components/ConfirmBadge";
import ProgressBar from "@/app/gatherings/components/ProgressBar";

function CardParticipants({
  participantCount,
  capacity,
}: {
  participantCount: number;
  capacity: number;
}) {
  const percent = (participantCount / capacity) * 100;
  return (
    <div className="flex justify-between md:pr-2 items-end mt-2">
      <div className="grid w-full max-w-[197px] md:max-w-[255px] lg:max-w-[556px] ">
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row gap-[2px] py-[2px] h-[20px]">
            <BsPersonFill className="w-4 h-4 text-gray-700" />
            <span className="text-body-1 leading-[18px] text-gray-700">
              {participantCount}/{capacity}
            </span>
          </div>
          {participantCount >= 5 && <ConfirmBadge />}
        </div>

        <div className="flex items-start -mt-1 -mb-2">
          <ProgressBar percent={percent} />
        </div>
      </div>
      <div className="flex items-end gap-2 h-6">
        <span className="text-orange-600 leading-none">join now</span>
        <LuArrowRight className="text-orange-600 w-[18px] h-[18px]" />
      </div>
    </div>
  );
}

export default CardParticipants;
