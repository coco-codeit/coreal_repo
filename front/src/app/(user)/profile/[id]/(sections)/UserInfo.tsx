import Image from "next/image";
import Template from "../components/Template";
import ProgressBar from "./ProgressBar";
interface UserInfoInterface {
  id: number;
  username: string;
  nickname: string;
  profileImage: string;
  temperature: number;
  techStacks: string[];
}
export default function UserInfo(userInfo: UserInfoInterface) {
  return (
    <Template>
      <div className="flex flex-row items-center gap-8 mb-6">
        <Image
          className="rounded-full overflow-hidden inline-block"
          src={userInfo.profileImage || "/images/default_user.webp"}
          alt="프로필 이미지"
          width="70"
          height="70"
        />
        <div>
          <h3 className="text-lg font-bold mb-1">{userInfo.nickname}</h3>
          <p className="text-sm font-normal">
            {userInfo.techStacks?.map((tech, index) => (
              <span className="mr-1 text-gray-13" key={`${tech}-${index}`}>
                {tech}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h5 className="text-base font-semibold mb-2">매너 온도</h5>
        <div className="bg-[#D3AAFD33] py-4 px-3 rounded-md border border-purple-4 grid grid-cols-5 items-center gap-2">
          <ProgressBar value={userInfo.temperature} className="col-span-4" />
          <span>{userInfo.temperature}도</span>
        </div>
      </div>
    </Template>
  );
}
