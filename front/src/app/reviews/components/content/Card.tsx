import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import SortControls from "./SortControls";
import HeartRating from "./HeartScore";
import ProgressBar from "./ProgressBar";
import InfiniteScroll from "./InfiniteScroll";
import { Review } from "@/types/reviews";

interface Tab {
  id: string;
  label: string;
  subTabs?: { id: string; label: string }[];
}

interface ReviewScores {
  teamId: number;
  gatheringId: number;
  type: string;
  averageScore: number;
  oneStar: number;
  twoStars: number;
  threeStars: number;
  fourStars: number;
  fiveStars: number;
}

interface CardProps {
  reviews: Review[];
  reviewScores: ReviewScores[];
  tabs: Tab[];
  selectedRegion: string | undefined;
  setSelectedRegion: (region: string | undefined) => void;
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedSubTab: string;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetching: boolean;
}

export default function Card({
  reviews,
  reviewScores,
  tabs,
  selectedRegion,
  setSelectedRegion,
  selectedSort,
  setSelectedSort,
  selectedDate,
  setSelectedDate,
  selectedSubTab,
  fetchNextPage,
  hasNextPage,
}: CardProps) {
  const scoreData = reviewScores[0] || { averageScore: 0 };
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);

  const scoreBars = [
    { label: "5점", value: scoreData.fiveStars },
    { label: "4점", value: scoreData.fourStars },
    { label: "3점", value: scoreData.threeStars },
    { label: "2점", value: scoreData.twoStars },
    { label: "1점", value: scoreData.oneStar },
  ];

  const getLabelsFromType = (type: string) => {
    for (const tab of tabs) {
      if (tab.id === type) {
        return { parentLabel: tab.label, childLabel: "" };
      }

      const subTab = tab.subTabs?.find((sub) => sub.id === type);
      if (subTab) {
        return { parentLabel: tab.label, childLabel: subTab.label };
      }
    }
    return { parentLabel: "", childLabel: "" };
  };

  const regionOptions = [
    { id: "all", label: "지역 전체" },
    { id: "건대입구", label: "건대입구" },
    { id: "을지로3가", label: "을지로 3가" },
    { id: "신림", label: "신림" },
    { id: "홍대입구", label: "홍대입구" },
  ];

  const handleRegionSelect = (option: { id: string; label: string }) => {
    if (option.id === "all") {
      setSelectedRegion("지역 선택");
    } else {
      setSelectedRegion(option.id);
    }
  };

  const sortOptions = [
    { id: "createdAt", label: "최신순" },
    { id: "score", label: "리뷰 높은 순" },
    { id: "participantCount", label: "참여 인원 순" },
  ];

  const totalReviews =
    scoreData.oneStar +
    scoreData.twoStars +
    scoreData.threeStars +
    scoreData.fourStars +
    scoreData.fiveStars;

  const safeTotalReviews = totalReviews === 0 ? 1 : totalReviews;

  useEffect(() => {
    if (!selectedDate) {
      setFilteredReviews(reviews);
    }
  }, [selectedDate, reviews]);

  const applyDateFilter = () => {
    if (!selectedDate) {
      setFilteredReviews(reviews);
      return;
    }

    const formattedSelectedDate = new Date(
      selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0];

    const filtered = reviews.filter((review) => {
      const reviewDate = new Date(review.Gathering.dateTime)
        .toISOString()
        .split("T")[0];

      return reviewDate === formattedSelectedDate;
    });

    setFilteredReviews(filtered);
  };

  const filterReviews = useCallback(() => {
    let filtered = reviews;

    if (selectedSubTab && selectedSubTab !== "ALL") {
      filtered = filtered.filter((review) => {
        const reviewType = review.Gathering?.type || "";
        return reviewType === selectedSubTab;
      });
    }

    if (selectedRegion && selectedRegion !== "지역 선택") {
      filtered = filtered.filter(
        (review) => review.Gathering.location === selectedRegion
      );
    }

    if (selectedDate) {
      const formattedSelectedDate = new Date(
        selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];

      filtered = filtered.filter((review) => {
        const reviewDate = new Date(review.Gathering.dateTime)
          .toISOString()
          .split("T")[0];
        return reviewDate === formattedSelectedDate;
      });
    }

    setFilteredReviews(filtered);
  }, [reviews, selectedRegion, selectedDate, selectedSubTab]);

  useEffect(() => {
    filterReviews();
  }, [filterReviews]);

  const handleApplyFilter = () => {
    applyDateFilter();
  };

  return (
    <div>
      {/* 리뷰 평점 평균 */}
      <div className="px-6 my-6 h-[180px] border-y-2 border-[#E5E7EB] bg-white flex justify-center items-center space-x-4">
        <div className="flex flex-col items-center basis-1/4">
          <p className="text-xl md:text-2xl font-semibold">
            {scoreData.averageScore || 0}
            <span className="text-gray-400">/5</span>
          </p>
          <div className="flex flex-row">
            <HeartRating averageScore={scoreData.averageScore} />
          </div>
        </div>
        {/* 리뷰 평점 막대 */}
        <ul className="flex flex-col text-sm font-medium basis-2/4 items-center">
          {scoreBars.map((score, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="w-[40px] text-end">{score.label}</span>
              <ProgressBar
                percent={((score.value || 0) / safeTotalReviews) * 100}
                className="md:w-60 w-[20vw] max-w-60 min-w-[84px]"
              />
              <span className="w-[40px] text-start">{score.value || 0}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 필터링 정렬 */}
      <div className="text-sm font-medium min-h-screen overflow-hidden bg-white border-t-2 border-gray-900 md:p-6 py-6 px-4">
        <div className="flex justify-between mb-6">
          <div className="flex flex-row gap-2">
            <div className="flex  gap-2 items-center justify-end ">
              <SortControls
                options={regionOptions}
                selectedOption={selectedRegion}
                onOptionSelect={handleRegionSelect}
              />
              <SortControls
                options={[]}
                selectedOption={
                  selectedDate
                    ? selectedDate.toLocaleDateString("ko-KR")
                    : "날짜 선택"
                }
                onOptionSelect={() => {}}
                showCalendar
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
                onApply={handleApplyFilter}
              />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <SortControls
              options={sortOptions}
              selectedOption={
                sortOptions.find((option) => option.id === selectedSort)?.label
              }
              onOptionSelect={(option) => setSelectedSort(option.id)}
              iconSrc="/images/sort.svg"
              iconWidth={24}
              iconHeight={24}
              iconPosition="left"
              hideTextOnMobile={true}
              anchorPosition="bottom end"
            />
          </div>
        </div>
        <InfiniteScroll
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetching={false}
        >
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => {
              const { parentLabel, childLabel } = getLabelsFromType(
                review.Gathering.type
              );

              // 리뷰 카드
              return (
                <div
                  key={review.id}
                  className="flex md:flex-row flex-col gap-6 w-full mb-6 bg-white"
                >
                  <div className="w-[311px] md:w-[280px] h-[156px] relative flex-shrink-0">
                    <Image
                      src={review.Gathering.image}
                      alt="Review Image"
                      className="object-cover rounded-3xl"
                      sizes="(max-width: 768px) 311px, 280px"
                      fill
                      priority
                    />
                  </div>

                  <div className="border-b-2 border-dashed border-[#E5E7EB] w-full">
                    <div className="flex flex-col gap-[10px] text-gray-700">
                      <div className="flex flex-row">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Image
                            key={`${review.id}-${index}`}
                            src={
                              index < review.score
                                ? "/images/active-heart.svg"
                                : "/images/heart.svg"
                            }
                            alt="heart"
                            width={24}
                            height={24}
                          />
                        ))}
                      </div>

                      <p>{review.comment}</p>
                      <p className="text-xs">
                        {`${parentLabel} ${childLabel} 이용`}
                        <span className="before:content-['·'] before:mx-1">
                          {review.Gathering.location}
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-2 mt-2 mb-4 md:mb-0 text-xs">
                      <Image
                        src={review.User.image || "/images/profile.svg"}
                        alt={`${review.User.name} profile`}
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="after:content-['|'] after:ml-2 text-gray-700">
                        {review.User.name}
                      </span>
                      <span className="ml-1 text-gray-500">
                        {`${new Date(review.createdAt).getFullYear()}.${String(new Date(review.createdAt).getMonth() + 1).padStart(2, "0")}.${String(new Date(review.createdAt).getDate()).padStart(2, "0")}`}
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
        </InfiniteScroll>
      </div>
    </div>
  );
}
