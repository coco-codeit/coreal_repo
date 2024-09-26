"use client";

import DetailHeader from "./_components/DetailHeader";
import DetailProjectCard from "./_components/DetailProjectCard";
import RecruitmentStatus from "./_components/RecruitmentStatus";
import CommentDisplay from "./_components/CommentDisplay";

/* 
  TODO:
    1. 실제 백엔드 데이터가 만들어지면 그 양식에 맡게 리팩토링예정 (양식도 안나오는 부분이있음 ex) 댓글)
    2. 아바타 호버시 프로필 보여주기 기능 안되고있음
    3. 전체적으로 디자인이 나오지않아 와이어 프레임을 따라가고있어서 
        디자인이 나왔을때 전체적으로 css 수정예정( 현재 와이어 프레임의 기능 구현)
    4. 댓글 기능 store 에 저장되어있는 훅들 리팩토링 예정
    5. 리액트 쿼리 활용한 백엔드 데이터 받을 준비
    6. 아이콘 양식 생기면 그에 맡게 매칭시키기.
*/

export default function Page() {
  const projectData = {
    name: "[전라북도] 어플리케이션 개발",
    description: "프로젝트에 대한 간단한 설명...",
  };

  const recruitmentData = [
    { title: "웹프론트엔드", current: 1, total: 4 },
    { title: "백엔드", current: 2, total: 4 },
    { title: "AI개발자", current: 1, total: 4 },
    { title: "웹프론트엔드", current: 2, total: 4 },
    { title: "안드개발자", current: 1, total: 3 },
    { title: "IOS개발자", current: 1, total: 2 },
  ];

  return (
    <div className="flex justify-center bg-white min-h-screen mb-20">
      <div className="w-full max-w-[1200px] px-4 ml-[49px]">
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col w-[753px]">
            <DetailHeader />
            <div className="flex">
              <div className="flex-grow">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">모집현황</h2>
                  <div className="bg-gray-100 p-10 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      {recruitmentData.map((item, index) => (
                        <RecruitmentStatus key={index} {...item} />
                      ))}
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    스터디 & 네트워킹 키워드
                  </h2>
                  <div className="flex gap-2">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="w-[80px] h-[80px] bg-gray-200 rounded-full"
                      ></div>
                    ))}
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">소개</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </p>
                </section>
              </div>
            </div>
          </div>
          <DetailProjectCard
            projectName={projectData.name}
            description={projectData.description}
            onParticipate={() => console.log("참여하기 클릭")}
          />
        </div>
        <CommentDisplay />
      </div>
    </div>
  );
}
