"use client";

import { UserGatheringInterface } from "@/types/common";
import Template from "../components/Template";
import useCarousel from "./useCarousel";
import Card from "./Card";

export default function Projects(userProjects: UserGatheringInterface[]) {
  const { Carousel, CarouselBtns } = useCarousel({
    length: userProjects?.length,
  });
  return (
    <Template>
      <div className="flex flex-row justify-between items-center mb-5">
        <h3 className="text-lg font-bold">
          참여하는 프로젝트
          <span className="ml-2 font-normal text-[#8C8C8C]">
            {userProjects.length}
          </span>
        </h3>
        <CarouselBtns />
      </div>
      {Array.isArray(userProjects) && userProjects.length > 0 && (
        <Carousel className="rounded-lg overflow-hidden">
          {userProjects.map((item, index) => (
            <Card
              key={`${item}-${index}`}
              item={item}
              bgColors={{ cardColor: "blue_sub", tagColor: "blue-2" }}
            />
          ))}
        </Carousel>
      )}
      {(!Array.isArray(userProjects) || userProjects.length === 0) && (
        <div className="py-10 text-center">아직 참여중인 프로젝트가 없어요</div>
      )}
    </Template>
  );
}
