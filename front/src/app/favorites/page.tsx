import Favorites from "@/app/favorites/components/Favorites";
import Header from "../gatherings/list/components/Header";

function Home() {
  return (
    <div className="min-w-[375px] max-w-[375px] px-4 md:max-w-[744px] md:px-[24.5px] lg:max-w-[996px] lg:min-w-[1200px] lg:px-[102px] min-h-screen mx-auto flex flex-col bg-gray-50">
      <Header type="saved" />
      <Favorites />
    </div>
  );
}

export default Home;
