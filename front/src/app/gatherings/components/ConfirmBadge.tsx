import { FaCircleCheck } from "react-icons/fa6";

function ConfirmBadge() {
  return (
    <div className="flex flex-row items-center gap-1">
      <FaCircleCheck className="text-orange-500 w-[18px] h-[18px]" />
      <span className="text-sm text-orange-500">개설확정</span>
    </div>
  );
}

export default ConfirmBadge;
