"use client";

import Template from "../components/Template";
import useCarousel from "./useCarousel";

const studies = [
  {
    id: "스터디ID",
    name: "스터디 이름",
    description: "스터디 설명",
    stack: ["JavaScript", "React", "NextJs"],
    imgUrl: "...", // 스터디의 대표 이미지
    members: [
      {
        id: "user1",
        nickname: "유저1_닉네임",
        imgUrl: "...", // 프로필 이미지
      },
      {
        id: "user2",
        nickname: "유저2_닉네임.",
        imgUrl: "...", // 프로필 이미지
      },
    ],
  },
  {
    id: "스터디ID",
    name: "스터디 이름",
    description: "스터디 설명",
    stack: ["JavaScript", "React", "NextJs"],
    imgUrl: "...", // 스터디의 대표 이미지
    members: [
      {
        id: "user1",
        nickname: "유저1_닉네임",
        imgUrl: "...", // 프로필 이미지
      },
      {
        id: "user2",
        nickname: "유저2_닉네임.",
        imgUrl: "...", // 프로필 이미지
      },
    ],
  },
  {
    id: "스터디ID",
    name: "스터디 이름",
    description: "스터디 설명",
    stack: ["JavaScript", "React", "NextJs"],
    imgUrl: "...", // 스터디의 대표 이미지
    members: [
      {
        id: "user1",
        nickname: "유저1_닉네임",
        imgUrl: "...", // 프로필 이미지
      },
      {
        id: "user2",
        nickname: "유저2_닉네임.",
        imgUrl: "...", // 프로필 이미지
      },
    ],
  },
  {
    id: "스터디ID",
    name: "스터디 이름",
    description: "스터디 설명",
    stack: ["JavaScript", "React", "NextJs"],
    imgUrl: "...", // 스터디의 대표 이미지
    members: [
      {
        id: "user1",
        nickname: "유저1_닉네임",
        imgUrl: "...", // 프로필 이미지
      },
      {
        id: "user2",
        nickname: "유저2_닉네임.",
        imgUrl: "...", // 프로필 이미지
      },
    ],
  },
];

export default function Studies() {
  const { Carousel, CarouselBtns } = useCarousel();
  return (
    <Template>
      <div className="flex flex-row justify-between items-center mb-5">
        <h3 className="text-lg font-bold">
          참여하는 스터디
          <span className="ml-2 font-normal text-[#8C8C8C]">
            {studies.length}
          </span>
        </h3>
        <CarouselBtns />
      </div>
      <Carousel className="rounded-lg overflow-hidden">
        {studies.map((item, index) => {
          return (
            <div key={`${item}-${index}`}>
              <div className="w-[calc(100%-20px)] h-[200px] bg-[#CEBCFF] rounded-xl p-4 flex flex-col justify-between">
                <h5 className="font-bold mb-3">{item.name}</h5>
                <div>{item.description}</div>
                <div>
                  {item.stack.map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="bg-[#EEEEEE] rounded-2xl py-[2px] px-2 mr-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </Template>
  );
}
