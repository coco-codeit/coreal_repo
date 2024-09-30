import Image from "next/image";
import ModifyProfile from "./ModifyProfile";
export default function UserInfo() {
  return (
    <div>
      <h1>내 프로필</h1>
      <ModifyProfile />
      <div>
        <Image src="" alt="" />
        <p>Nickname</p>
        <p>company: </p>
        <p>E-mail: </p>
      </div>
    </div>
  );
}
