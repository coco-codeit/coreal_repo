import UserImage from "../UserImage";
import useUserInfo from "@/stores/useUserInfo";
import ModifyProfileBtn from "./ModifyProfileBtn";

export default function UserInfo({ className }: { className?: string }) {
  const { name, email, image, companyName } = useUserInfo();

  return (
    <div
      className={`box-border rounded-3xl border-2 border-gray-200 overflow-hidden ${className}`}
    >
      <div className="h-[65px] m-0 px-6 flex flex-row justify-between items-center bg-purple-1">
        <h3 className="text-lg font-semibold">내 프로필</h3>
        <ModifyProfileBtn />
      </div>
      <div className="flex flex-row px-4 gap-2">
        <UserImage
          src={image}
          name={name}
          className="border-2 border-white -translate-y-3"
        />
        <div className="pb-4 pt-3">
          <p className="text-base font-semibold mb-2">{name}</p>
          <div className="text-sm grid grid-cols-[70px,1fr] gap-x-2 gap-y-1">
            <span className="font-medium">company.</span>
            <span>{companyName}</span>
            <span className="font-medium">E-mail.</span>
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
