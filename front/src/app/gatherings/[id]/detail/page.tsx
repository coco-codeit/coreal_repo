import Image from "next/image";
import React from "react";

export default function detail() {
  return (
    <div className="h-screen-minus-nav bg-[#F3F4F6]">
      <div className="mx-auto container max-w-[1200px] px-[102px] pt-10 bg-white">
        <section className="flex h-[270px] gap-6">
          <div className="relative w-1/2">
            <Image
              className="relative rounded-3xl"
              src="/images/detail/gatherDetail.png"
              alt="Gather Detail Img"
              fill
            />
            <div className="absolute flex items-center right-[2px] top-[2px] w-[123px] h-8 rounded-tr-3xl rounded-bl-lg bg-[#EA580C] text-white">
              <Image
                className="ml-2 mr-1"
                src="/images/detail/clock.svg"
                alt="clock icon"
                width={24}
                height={24}
              />
              <span className="text-[12px]">오늘 21시 마감</span>
            </div>
          </div>

          <div className="w-1/2 py-6 rounded-[24px] border-2 border-gray-200">
            <div className="relative mx-[22px] mb-3">
              <Image
                className="absolute right-0"
                src="/images/detail/save.png"
                alt="heart icon"
                width={48}
                height={48}
              />
              <h2>달램핏 오피스 스트레칭</h2>
              <span>을지로 3가 서울시 중구 청계천로 100</span>
            </div>
            <div className="flex mx-[22px]">
              <div className="flex items-center justify-center w-[58px] h-6 mr-2 text-[14px] rounded-[4px] bg-[#111827] text-white">
                8월 7일
              </div>
              <div className="flex items-center justify-center w-[58px] h-6 mr-2 text-[14px] rounded-[4px] bg-[#EA580C] text-white">
                17:30
              </div>
            </div>

            <hr className="border-dashed border-gray-400 mt-[43px]" />

            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="">모집정원 16명</div>
                  <div className="flex ml-[22px]">
                    <div className="h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"></div>
                    <div className="h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"></div>
                    <div className="h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"></div>
                    <div className="h-[29px] w-[29px] rounded-full bg-gray-300 -ml-[10px]"></div>
                    <div className="flex items-center justify-center text-[14px] h-[29px] w-[29px] rounded-full bg-gray-500 -ml-[10px]">
                      +12
                    </div>
                  </div>
                </div>
                <div>개설확정</div>
              </div>
              <div className="w-full h-1 mt-3 mb-2 bg-gray-300 rounded-full">
                <div
                  className={`h-full rounded-full bg-[#EA580C]`}
                  style={{ width: `70%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-[12px]">
                <div>최소인원 5명</div>
                <div>최대인원 20명</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 p-6 border-t-2 border-[#E5E7EB]">
          <h2 className="text-[18px] font-semibold mb-[16px]">
            이용자들은 이 프로그램을 이렇게 느꼈어요!
          </h2>
          <div>
            따듯하게 느껴지는 공간이에요 평소에 달램 이용해보고 싶었는데 이렇게
            같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면
            좋겠어요.
          </div>
          <div className="flex">모닝러너 | 2024.01.25</div>
        </section>
      </div>
    </div>
  );
}
