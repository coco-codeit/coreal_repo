import Projects from "./(sections)/Projects";
import Reviews from "./(sections)/Reviews";
import Studies from "./(sections)/Studies";
import UserInfo from "./(sections)/UserInfo";

export default function Profile() {
  // 유저 정보 받기
  return (
    <div className="container mx-auto max-w-[1024px] flex flex-col gap-6 px-6 pb-10">
      <div className="grid grid-cols-2 gap-6 w-full">
        <UserInfo />
        <Reviews />
      </div>
      <Studies />
      <Projects />
    </div>
  );
}
