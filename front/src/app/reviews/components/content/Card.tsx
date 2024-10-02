import React, { useState } from "react";
import Image from "next/image";
import SortControls from "./SortControls";

// interface CardProps {
//   selectedTab: string;
// }

export default function Card() {
  const regionOptions = [
    { id: "all", label: "지역 선택" },
    { id: "KonkukUniv", label: "건대입구" },
    { id: "Euljiro3ga", label: "을지로 3가" },
    { id: "sillim", label: "신림" },
    { id: "hongikUniv", label: "홍대입구" },
  ];

  const dateOptions = [{ id: "all", label: "날짜 선택" }];

  const sortOptions = [
    { id: "latest", label: "최신순" },
    { id: "highestReview", label: "리뷰 높은 순" },
    { id: "mostParticipants", label: "참여 인원 순" },
  ];

  const [selectedRegion, setSelectedRegion] = useState("지역 선택");
  const [selectedDate, setSelectedDate] = useState("날짜 선택");
  const [selectedSort, setSelectedSort] = useState("최신순");

  return (
    <div>
      <div className="my-6 h-[180px] border-y-2 border-[#E5E7EB] bg-white flex justify-center items-center">
        <div className="flex flex-col items-center mr-[180px]">
          <p>4.0/5</p>
          <span className="flex flex-row">
            <Image
              src="/images/active-heart.svg"
              alt="heart"
              width={24}
              height={24}
            />
            <Image src="/images/heart.svg" alt="heart" width={24} height={24} />
            <Image src="/images/heart.svg" alt="heart" width={24} height={24} />
            <Image src="/images/heart.svg" alt="heart" width={24} height={24} />
            <Image src="/images/heart.svg" alt="heart" width={24} height={24} />
          </span>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center justify-between">
            <span className="w-[40px] text-end">5점</span>
            <div className="w-[240px] h-1 bg-[#E5E7EB] rounded-sm mx-3">
              <div className="bg-[#111827] rounded-lg w-9/12 h-full"></div>
            </div>
            <span className="w-[40px] text-start">27</span>
          </li>

          <li className="flex items-center justify-between">
            <span className="w-[40px] text-end">4점</span>
            <div className="w-[240px] h-1 bg-[#E5E7EB] rounded-sm mx-3">
              <div className="bg-[#111827] rounded-lg w-7/12 h-full"></div>
            </div>
            <span className="w-[40px] text-start">19</span>
          </li>

          <li className="flex items-center justify-between">
            <span className="w-[40px] text-end">3점</span>
            <div className="w-[240px] h-1 bg-[#E5E7EB] rounded-sm mx-3">
              <div className="bg-[#111827] rounded-lg w-1/12 h-full"></div>
            </div>
            <span className="w-[40px] text-start">2</span>
          </li>

          <li className="flex items-center justify-between">
            <span className="w-[40px] text-end">2점</span>
            <div className="w-[240px] h-1 bg-[#E5E7EB] rounded-sm mx-3"></div>
            <span className="w-[40px] text-start">0</span>
          </li>

          <li className="flex items-center justify-between">
            <span className="w-[40px] text-end">1점</span>
            <div className="w-[240px] h-1 bg-[#E5E7EB] rounded-sm mx-3"></div>
            <span className="w-[40px] text-start">0</span>
          </li>
        </ul>
      </div>
      <div className="bg-white border-t-2 border-[#111827] p-6">
        <div className="flex justify-between mb-6">
          <div className="flex flex-row gap-2">
            <div className="flex  gap-2 items-center justify-end ">
              <SortControls
                options={regionOptions}
                selectedOption={selectedRegion}
                onOptionSelect={(option) => setSelectedRegion(option.label)}
              />
              <SortControls
                options={dateOptions}
                selectedOption={selectedDate}
                onOptionSelect={(option) => setSelectedDate(option.label)}
              />
            </div>
          </div>
          <div className="flex lg:gap-4 gap-2 items-center justify-end ">
            <SortControls
              options={sortOptions}
              selectedOption={selectedSort}
              onOptionSelect={(option) => setSelectedSort(option.label)}
            />
          </div>
        </div>

        <div className="flex gap-6 w-full ">
          <div className="w-[280px] h-[156px] rounded-3xl relative">
            <Image
              src="/images/reviews.svg"
              alt="Review Image"
              className="object-cover"
              fill
            />
          </div>

          <div className="border-b-2 border-dashed border-[#E5E7EB] w-[644px]">
            <div className="flex flex-col gap-[10px] text-[#374151]">
              <div className="flex flex-row">
                <Image
                  src="/images/active-heart.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/active-heart.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/active-heart.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/active-heart.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
                <Image
                  src="/images/active-heart.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
              </div>
              <p>
                따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데
                이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이
                늘어났으면 좋겠어요.
              </p>
              <p>
                달램핏 오피스 스트레칭 이용
                <span className="before:content-['·'] before:mx-1">
                  을지로 3가
                </span>
              </p>
            </div>

            <div className="flex flex-row items-center gap-2 mt-2">
              <Image
                src="/images/profile.svg"
                alt="profile"
                width={32}
                height={32}
              />
              <span className="after:content-['|'] after:ml-2 text-[#374151]">
                닉네임
              </span>
              <span className="ml-1 text-[#374151]">2024.01.25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
