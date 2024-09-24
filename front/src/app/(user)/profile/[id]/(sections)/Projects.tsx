"use client";

import { UserGatheringInterface } from "@/types/common";
import Template from "../components/Template";
import useCarousel from "./useCarousel";

export default function Projects(userProjects: UserGatheringInterface[]) {
  const { Carousel, CarouselBtns } = useCarousel();
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
      <Carousel className="rounded-lg overflow-hidden">
        {Array.isArray(userProjects) &&
          userProjects.map((item, index) => {
            return (
              <div key={`${item}-${index}`}>
                <div className="w-[calc(100%-20px)] h-[200px] bg-[#D0E3FF] rounded-xl p-4 flex flex-col justify-between">
                  <h5 className="font-bold mb-3">{item.gatheringName}</h5>
                  <div>{item.description}</div>
                  <div>
                    {item.techStacks.map((tech, index) => (
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
