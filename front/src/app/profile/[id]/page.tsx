import { getUserProfile } from "@/apis/profile";
import Projects from "./components/Projects";
import ReviewStatistics from "./components/ReviewStatistics";
import Studies from "./components/Studies";
import UserInfo from "./components/UserInfo";

export default async function Profile() {
  // 유저 정보 받기
  const id = 1;
  const data = await getUserProfile(id);

  const userInfo = {
    id: data.id,
    username: data.username,
    nickname: data.nickname,
    profileImage: data.profileImage,
    temperature: data.temperature,
    techStacks: data.techStacks,
  };

  // const userRiviews = {};
  const userStudies = data.gatheringStudy;
  const userProjects = data.gatheringProject || [];

  return (
    <div className="container mx-auto w-full sm:w-[500px] md:w-[700px] lg:w-full max-w-[1024px] flex flex-col gap-3 md:gap-6 px-3 pb-6 md:px-6 md:pb-10 text-sm md:text-base">
      <div className="grid lg:grid-cols-2 gap-3 md:gap-6">
        <UserInfo {...userInfo} />
        <ReviewStatistics />
      </div>
      <Studies {...userStudies} />
      <Projects {...userProjects} />
    </div>
  );
}
