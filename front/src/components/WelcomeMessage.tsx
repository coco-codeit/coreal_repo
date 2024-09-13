import Image from "next/image";

export default function WelcomeMessage() {
  return (
    <section aria-labelledby="welcome-heading">
      <div className="text-center">
        <h1
          id="welcome-heading"
          className="text-display-1 md:text-display-1 font-bold pb-2"
        >
          내가 원하는 모든 것 CoReal
        </h1>
        <div className="text-body-2 md:text-lg">
          <p>시리얼이 쏟아지듯 다채로운 프로젝트 그리고 스터디,</p>
          <p>IT관련 종사자들을 위한 모든 것 CoReal</p>
        </div>
      </div>
      <div className="relative mx-auto w-[242px] h-[162px] sm:w-[385px] sm:h-[257px] md:w-[536px] md:h-[358px] my-[29px] sm:my-[46px] md:my-16 ">
        <Image src={`/images/login.svg`} alt="CoReal 서비스 소개 이미지" fill />
      </div>
    </section>
  );
}
