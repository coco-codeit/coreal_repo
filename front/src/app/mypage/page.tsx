import { getUserProfile } from "@/apis/profile";
import ManageTab from "./components/manage/ManageTab";
import UserInfo from "./components/userinfo/UserInfo";
import { UserProfileInterface } from "@/types/common";

export default async function MyPage() {
  const userInfo: UserProfileInterface = await getUserProfile();

  return (
    <div>
      <h1>마이 페이지</h1>
      <UserInfo userInfo={userInfo} />
      <ManageTab />
    </div>
  );
}
