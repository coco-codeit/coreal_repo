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
      console.log(
        "드롭다운 날짜:",
        formattedSelectedDate,
        "모임 날짜:",
        reviewDate
      );

      return reviewDate === formattedSelectedDate;
    });

    setFilteredReviews(filtered);
  };

  const filterReviews = useCallback(() => {
    let filtered = reviews;

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
  }, [reviews, selectedRegion, selectedDate]);

  useEffect(() => {
    filterReviews();
  }, [filterReviews]);

  const handleApplyFilter = () => {
    applyDateFilter();
  };

  return (
    <div>
      {/* 리뷰 평점 평균 */}
      <div className="my-6 h-[180px] border-y-2 border-[#E5E7EB] bg-white flex justify-center items-center">
        <div className="flex flex-col items-center mr-[180px]">
          <p className="text-2xl font-semibold">
            {scoreData.averageScore || 0}/5
          </p>
          <div className="flex flex-row">
            <HeartRating averageScore={scoreData.averageScore} />
          </div>
        </div>
        {/* 리뷰 평점 막대 */}
        <ul className="flex flex-col gap-2 text-sm font-medium">
          {scoreBars.map((score, index) => (
            <li key={index} className="flex items-center justify-between">
              <span className="w-[40px] text-end">{score.label}</span>
              <ProgressBar
                percent={((score.value || 0) / safeTotalReviews) * 100}
                width="240px"
              />
              <span className="w-[40px] text-start">{score.value || 0}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 필터링 정렬 */}
      <div className="text-sm font-medium min-h-screen overflow-hidden bg-white border-t-2 border-[#111827] p-6">
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
          <div className="flex lg:gap-4 gap-2 items-center justify-end">
            <SortControls
              options={sortOptions}
              selectedOption={
                sortOptions.find((option) => option.id === selectedSort)?.label
              }
              onOptionSelect={(option) => setSelectedSort(option.id)}
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
                      <p>
                        {`${parentLabel} ${childLabel} 이용`}
                        <span className="before:content-['·'] before:mx-1">
                          {review.Gathering.location}
                        </span>
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-2 mt-2">
                      <Image
                        src={review.User.image || "/images/profile.svg"}
                        alt={`${review.User.name} profile`}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="after:content-['|'] after:ml-2 text-[#374151]">
                        {review.User.name}
                      </span>
                      <span className="ml-1 text-[#374151]">
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
