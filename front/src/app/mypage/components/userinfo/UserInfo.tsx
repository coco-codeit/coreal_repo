import Image from "next/image";
import ModifyProfileBtn from "./ModifyProfileBtn";

interface UserInfoProps {
  teamId: number;
  id: number;
  email: string;
  name: string;
  companyName: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
export default function UserInfo({ userInfo }: { userInfo?: UserInfoProps }) {
  if (!userInfo) return <></>;
  return (
    <div className="box-border rounded-3xl border-2 border-gray-200 overflow-hidden">
      <div className="h-[65px] m-0 px-6 flex flex-row justify-between items-center bg-[url('/images/profile_background.svg')]">
        <h3 className="text-lg font-semibold">내 프로필</h3>
        <ModifyProfileBtn />
      </div>
      <div className="flex flex-row px-4 gap-2">
        {/* userInfo.image !== "string" 는 서버 더미데이터 처리용으로, 추후 지워야 함 */}
        {userInfo.image && (
          <div className="rounded-full w-14 h-14 box-content border-2 border-white -translate-y-3">
            <Image
              src={
                userInfo.image !== "string"
                  ? userInfo.image
                  : "/images/default_user_image.svg"
              }
              width="100"
              height="100"
              alt={`${userInfo?.name}님의 프로필 이미지`}
              className="box-border w-14 h-14 rounded-full border-2 border-gray-200"
            />
          </div>
        )}
        <div className="pb-4 pt-3">
          <p className="text-base font-semibold mb-2">{userInfo.name}</p>
          <div className="text-sm grid grid-cols-5 gap-x-2 gap-y-1">
            <span className="font-medium">company.</span>
            <span className="col-span-4">{userInfo.companyName}</span>
            <span className="font-medium">E-mail.</span>
            <span className="col-span-4">{userInfo.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
