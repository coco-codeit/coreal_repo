import Image from "next/image";
import Template from "../components/Template";
import ProgressBar from "./ProgressBar";

export default function UserInfo() {
  return (
    <Template>
      <div className="flex flex-row items-center gap-8 mb-6">
        <Image
          className="rounded-full overflow-hidden inline-block"
          src="/images/default_user.webp"
          alt="프로필 이미지"
          width="70"
          height="70"
        />
        <div>
          <h3 className="text-lg font-bold mb-1">닉네임</h3>
          <p className="text-sm font-normal text-gray-13">프론트엔드 개발자</p>
        </div>
      </div>
      <div>
        <h5 className="text-base font-semibold mb-2">매너 온도</h5>
        <div className="bg-[#D3AAFD33] py-4 px-3 rounded-md border border-purple-4 flex flex-row items-center">
          <ProgressBar value={37} className="w-[calc(100%-70px)] mr-3" />
          <span>37도</span>
        </div>
      </div>
    </Template>
  );
}
