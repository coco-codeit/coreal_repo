import { FaCircleCheck } from "react-icons/fa6";

function ConfirmBadge() {
  return (
    <div className="flex flex-row justify-start items-center w-[77px] h-[24px] gap-1 ">
      <FaCircleCheck className="w-6 h-6 text-orange-500" />
      <p className="text-body-1 text-orange-500">개설확정</p>
    </div>
  );
}

export default ConfirmBadge;
