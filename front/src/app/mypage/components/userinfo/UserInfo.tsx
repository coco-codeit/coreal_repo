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
        <Image
          src={userInfo.image || ""}
          alt={`${userInfo?.name}님의 프로필 이미지`}
        />
        <p>{userInfo.name}</p>
        <p>company: {userInfo.companyName}</p>
        <p>E-mail: {userInfo.email}</p>
      </div>
    </div>
  );
}
