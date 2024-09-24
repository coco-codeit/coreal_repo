"use client";

import { UserGatheringInterface } from "@/types/common";
import Template from "../components/Template";
import useCarousel from "./useCarousel";
import Card from "./Card";

export default function Studies(userStudies: UserGatheringInterface[]) {
  console.log(userStudies);
  const { Carousel, CarouselBtns } = useCarousel({
    length: userStudies.length,
  });
  return (
    <Template>
      <div className="flex flex-row justify-between items-center mb-5">
        <h3 className="text-lg font-bold">
          참여하는 스터디
          <span className="ml-2 font-normal text-[#8C8C8C]">
            {userStudies.length}
          </span>
        </h3>
        <CarouselBtns />
      </div>
      {Array.isArray(userStudies) && userStudies.length > 0 && (
        <Carousel className="rounded-lg overflow-hidden">
          {userStudies.map((item, index) => (
            <Card key={`${item}-${index}`} item={item} />
          ))}
        </Carousel>
      )}
      {(!Array.isArray(userStudies) || userStudies.length === 0) && (
        <div className="py-10 text-center">아직 참여중인 스터디가 없어요</div>
      )}
    </Template>
  );
}
