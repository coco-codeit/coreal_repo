import React, { useEffect, useState } from "react";
import Image from "next/image";
import SortControls from "./SortControls";

interface Tab {
  id: string;
  label: string;
  subTabs?: { id: string; label: string }[];
}

interface Review {
  Gathering: {
    dateTime: string;
    location: string;
    image: string;
    type: string;
  };
  User: {
    name: string;
  };
  id: number;
  comment: string;
  score: number;
}

interface CardProps {
  reviews: Review[];
  tabs: Tab[];
  selectedRegion: string | undefined;
  setSelectedRegion: (region: string | undefined) => void;
}

export default function Card({
  reviews,
  tabs,
  selectedRegion,
  setSelectedRegion,
}: CardProps) {
  useEffect(() => {
    console.log("리뷰 리스트 출력", reviews);
  }, [reviews]);

  const getLabelsFromType = (type: string) => {
    for (const tab of tabs) {
      const subTab = tab.subTabs?.find((sub) => sub.id === type);
      if (subTab) {
        return { parentLabel: tab.label, childLabel: subTab.label };
      }
    }
    return { parentLabel: "", childLabel: "" };
  };

  const safeReviews = Array.isArray(reviews) ? reviews : [];
  console.log(safeReviews);

  useEffect(() => {
    console.log("Filtered Reviews:", reviews);
  }, [reviews]);

  useEffect(() => {
    console.log("Selected Region for Filtering:", selectedRegion);
  }, [selectedRegion]);

  const regionOptions = [
    { id: "all", label: "지역 전체" },
    { id: "건대입구", label: "건대입구" },
    { id: "을지로3가", label: "을지로 3가" },
    { id: "신림", label: "신림" },
    { id: "홍대입구", label: "홍대입구" },
  ];

  const handleRegionSelect = (option: { id: string; label: string }) => {
    if (option.id === "all") {
      setSelectedRegion(undefined);
    } else {
      setSelectedRegion(option.id);
    }
  };

  const dateOptions = [{ id: "all", label: "날짜 선택" }];

  const sortOptions = [
    { id: "latest", label: "최신순" },
    { id: "highestReview", label: "리뷰 높은 순" },
    { id: "mostParticipants", label: "참여 인원 순" },
  ];

  const [selectedDate, setSelectedDate] = useState("날짜 선택");
  const [selectedSort, setSelectedSort] = useState("최신순");

  return (
    <div>
      <div className="my-6 h-[180px] border-y-2 border-[#E5E7EB] bg-white flex justify-center items-center">
        <div className="flex flex-col items-center mr-[180px]">
          <p className="text-2xl font-semibold">4.0/5</p>
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
        <ul className="flex flex-col gap-2 text-sm font-medium">
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
      <div className="text-sm font-medium min-h-screen overflow-hidden  bg-white border-t-2 border-[#111827] p-6">
        <div className="flex justify-between mb-6">
          <div className="flex flex-row gap-2">
            <div className="flex  gap-2 items-center justify-end ">
              <SortControls
                options={regionOptions}
                selectedOption={selectedRegion || "지역 선택"}
                onOptionSelect={handleRegionSelect}
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

        {safeReviews.length > 0 ? (
          safeReviews.map((review) => {
            const { parentLabel, childLabel } = getLabelsFromType(
              review.Gathering.type
            );

            return (
              <div key={review.id} className="flex gap-6 w-full mb-6">
                <div className="w-[280px] h-[156px] relative">
                  <Image
                    src={review.Gathering.image}
                    alt="Review Image"
                    className="object-cover rounded-3xl"
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
                    <p>{review.comment}</p>
                    <p>
                      {`${parentLabel} ${childLabel} 이용`}
                      <span className="before:content-['·'] before:mx-1">
                        {review.Gathering.location}
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
                      {review.User.name}
                    </span>
                    <span className="ml-1 text-[#374151]">
                      {`${new Date(review.Gathering.dateTime).getFullYear()}.${new Date(review.Gathering.dateTime).getMonth() + 1}.${new Date(review.Gathering.dateTime).getDate()}`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="flex justify-center items-center h-full text-[#6B7280]">
            아직 리뷰가 없어요
          </p>
        )}
      </div>
    </div>
  );
}
