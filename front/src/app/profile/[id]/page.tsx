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
    <div className="container mx-auto max-w-[1024px] flex flex-col gap-6 px-6 pb-10">
      <div className="grid grid-cols-2 gap-6 w-full">
        <UserInfo {...userInfo} />
        <ReviewStatistics />
      </div>
      <Studies {...userStudies} />
      <Projects {...userProjects} />
    </div>
  );
}
