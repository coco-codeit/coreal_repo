import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

export default function DetailHeader() {
  const buttons = {
    edit: "수정",
    delete: "삭제",
  };

  const Divider = () => <div className="w-px h-[18px] bg-[#9a9a9a]" />;

  return (
    <header className="flex flex-col w-[753px] h-[97px] mb-6 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="w-[423px] h-[41px] text-[28px] font-bold text-left text-[#484848]">
            [전라북도] 어플리케이션 개발
          </h1>
          <div className="flex items-center text-[20px] text-[#9a9a9a] gap-3">
            {/* TODO : 글쓴이로 변경 */}
            <span>dkdkdkdkdkd</span>
            <Divider />
            {/* TODO : 글쓴시간 으로 변경 */}
            <span>2024.09.08 20:28</span>
            <Divider />
            {/* TODO : 버튼 동작시 어떻게 작동할지 논의  모달창? */}
            <button>{buttons.edit}</button>
            <Divider />
            {/* TODO : 버튼 동작시 삭제 요청 */}
            <button>{buttons.delete}</button>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-500 ">
            <CiHeart className="w-[36px] h-[32px] stroke-[#484848] stroke-[1]" />
          </button>
          <button className="text-gray-500">
            <CiShare2 className=" w-[32px] h-[34px] stroke-[#484848] stroke-[1]" />
          </button>
        </div>
      </div>
    </header>
  );
}
