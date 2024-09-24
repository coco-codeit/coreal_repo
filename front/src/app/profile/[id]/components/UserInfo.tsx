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

const DefaultUserImage = "/images/default_user.webp";

export default function UserInfo(userInfo: UserInfoInterface) {
  return (
    <Template>
      <div className="flex flex-row items-center gap-8 mb-6">
        <Image
          className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden inline-block"
          src={userInfo.profileImage || DefaultUserImage}
          alt="프로필 이미지"
          width="70"
          height="70"
        />
        <div>
          <h3 className="text-base md:text-lg font-bold mb-1">
            {userInfo.nickname}
          </h3>
          <p className="text-xs md:text-sm font-normal">
            {userInfo.techStacks?.map((tech, index) => (
              <span className="mr-1 text-gray-13" key={`${tech}-${index}`}>
                {tech}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h5 className="font-semibold mb-2">매너 온도</h5>
        <div className="bg-[#D3AAFD33] py-4 px-3 rounded-lg border border-purple-4 grid grid-cols-5 items-center gap-2">
          <ProgressBar value={userInfo.temperature} className="col-span-4" />
          <span>{userInfo.temperature}도</span>
        </div>
      </div>
    </Template>
  );
}
