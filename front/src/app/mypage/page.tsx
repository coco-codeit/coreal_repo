import { getUserProfile } from "@/apis/profile";
import ManageTab from "./components/manage/ManageTab";
import UserInfo from "./components/userinfo/UserInfo";
import { UserProfileInterface } from "@/types/common";

export default async function MyPage() {
  const userInfo: UserProfileInterface = await getUserProfile();

  return (
    <>
      <h1 className="text-lg md:text-2xl font-semibold mb-3 md:mb-5">
        마이 페이지
      </h1>
      <UserInfo userInfo={userInfo} className="mb-3 lg:mb-5" />
      <ManageTab className="" />
    </>
  );
}
