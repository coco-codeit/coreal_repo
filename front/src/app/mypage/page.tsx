import ManageTab from "./components/manage-tab/ManageTab";
import UserInfo from "./components/userinfo/UserInfo";

export default function MyPage() {
  return (
    <div>
      <h1>마이 페이지</h1>
      <UserInfo />
      <ManageTab />
    </div>
  );
}
