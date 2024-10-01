import Image from "next/image";
import ModifyProfile from "./ModifyProfile";

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
    <div>
      <h1>내 프로필</h1>
      <ModifyProfile />
      <div>
        {/* userInfo.image !== "string" 는 서버 더미데이터 처리용으로, 추후 지워야 함 */}
        {userInfo.image && userInfo.image !== "string" && (
          <Image
            src={userInfo.image || ""}
            width="100"
            height="100"
            alt={`${userInfo?.name}님의 프로필 이미지`}
          />
        )}
        <p>{userInfo.name}</p>
        <p>company: {userInfo.companyName}</p>
        <p>E-mail: {userInfo.email}</p>
      </div>
    </div>
  );
}
