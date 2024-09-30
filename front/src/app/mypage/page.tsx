import ManageTab from "./components/manage-tab/ManageTab";
import MyProfile from "./components/my-profile/MyProfile";

export default function MyPage() {
  return (
    <div>
      <h1>마이 페이지</h1>
      <MyProfile />
      <ManageTab />
    </div>
  );
}
