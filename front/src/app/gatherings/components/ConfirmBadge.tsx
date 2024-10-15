import Image from "next/image";

function ConfirmBadge() {
  return (
    <div className="flex flex-row items-center gap-1">
      <Image src="/images/card/check.svg" alt="check" width={24} height={24} />
      <span className="text-sm text-orange-500">개설확정</span>
    </div>
  );
}

export default ConfirmBadge;
