import { FaCircleCheck } from "react-icons/fa6";

function ConfirmBadge() {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="flex items-center justify-center w-6 h-6">
        <FaCircleCheck className="text-orange-500 w-[18px] h-[18px]" />
      </div>
      <span className="text-body-1 text-orange-500 leading-none pt-[2px]">
        개설확정
      </span>
    </div>
  );
}

export default ConfirmBadge;
