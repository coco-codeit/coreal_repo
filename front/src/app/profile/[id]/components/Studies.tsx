"use client";

import { UserGatheringInterface } from "@/types/common";
import Template from "../components/Template";
import useCarousel from "./useCarousel";
import Card from "./Card";
import Link from "next/link";

export default function Studies({
  id,
  studies,
}: {
  id: number;
  studies: UserGatheringInterface[];
}) {
  const { Carousel, CarouselBtns } = useCarousel({
    length: studies.length,
  });
  return (
    <Template>
      <div className="flex flex-row justify-between items-center mb-5">
        <h3 className="text-base md:text-lg font-bold">
          참여하는 스터디
          <span className="ml-2 font-normal text-[#8C8C8C]">
            {studies.length}
          </span>
        </h3>
        <div>
          <Link href={`./${id}/reviews`} className="hover:font-bold">
            리뷰 관리
          </Link>
          <CarouselBtns />
        </div>
      </div>
      {Array.isArray(studies) && studies.length > 0 && (
        <Carousel className="rounded-lg overflow-hidden">
          {studies.map((item, index) => (
            <Card
              key={`${item}-${index}`}
              item={item}
              bgColors={{ cardColor: "purple_sub", tagColor: "purple-3" }}
            />
          ))}
        </Carousel>
      )}
      {(!Array.isArray(studies) || studies.length === 0) && (
        <div className="py-10 text-center">아직 참여중인 스터디가 없어요</div>
      )}
    </Template>
  );
}
