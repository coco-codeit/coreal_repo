import Image from "next/image";

export default function WelcomeMessage() {
  return (
    <section aria-labelledby="welcome-heading">
      <div className="text-center">
        <h1
          id="welcome-heading"
          className="text-display-1 md:text-display-1 font-bold pb-2"
        >
          코드와 코드가 만나 더 리얼해지는 공간
        </h1>
        <div className="text-body-2 md:text-lg">
          <p>원하는 스터디와 프로젝트 모임을 통해,</p>
          <p>내 코드를 진짜처럼 만들어 보세요.</p>
        </div>
      </div>
      <div className="relative mx-auto w-[242px] h-[162px] sm:w-[385px] sm:h-[257px] md:w-[536px] md:h-[358px] my-[29px] sm:my-[46px] md:my-16 ">
        <Image
          src="/images/login.svg"
          alt="CoReal 서비스 소개 이미지"
          fill
          priority
        />
      </div>
    </section>
  );
}
