"use client";

import { UserGatheringInterface } from "@/types/common";
import Template from "../components/Template";
import useCarousel from "./useCarousel";
import Card from "./Card";
import Link from "next/link";

export default function Projects({
  id,
  projects,
}: {
  id: number;
  projects: UserGatheringInterface[];
}) {
  const { Carousel, CarouselBtns } = useCarousel({
    length: projects?.length,
  });
  return (
    <Template>
      <div className="flex flex-row justify-between items-center mb-5">
        <h3 className="text-base md:text-lg font-bold">
          참여하는 프로젝트
          <span className="ml-2 font-normal text-[#8C8C8C]">
            {projects.length}
          </span>
        </h3>
        <div>
          <Link href={`./${id}/reviews`} className="hover:font-bold">
            리뷰 관리
          </Link>
          <CarouselBtns />
        </div>
      </div>
      {Array.isArray(projects) && projects.length > 0 && (
        <Carousel className="rounded-lg overflow-hidden">
          {projects.map((item, index) => (
            <Card
              key={`${item}-${index}`}
              item={item}
              bgColors={{ cardColor: "blue_sub", tagColor: "blue-2" }}
            />
          ))}
        </Carousel>
      )}
      {(!Array.isArray(projects) || projects.length === 0) && (
        <div className="py-10 text-center">아직 참여중인 프로젝트가 없어요</div>
      )}
    </Template>
  );
}
