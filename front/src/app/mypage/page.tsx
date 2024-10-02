import { getUserProfile } from "@/apis/profile";
import ManageTab from "./components/manage/ManageTab";
import UserInfo from "./components/userinfo/UserInfo";
import { UserProfileInterface } from "@/types/common";

export default async function MyPage() {
  const userInfo: UserProfileInterface = await getUserProfile();

  return (
    <>
      <h1 className="text-lg sm:text-2xl font-semibold">마이 페이지</h1>
      <UserInfo userInfo={userInfo} />
      <ManageTab />
    </>
  );
}
