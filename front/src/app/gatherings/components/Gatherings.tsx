"use client";

import Image from "next/image";
import Link from "next/link";
import Category from "@/app/gatherings/components/Category";
import Button from "@/app/gatherings/components/Button";

function Gatherings() {
  return (
    <div className="max-w-6xl mx-auto min-w-full px-4 md:px-6 lg:px-24">
      <div className="flex justify-start items-center gap-5 py-8">
        <Image
          src="/images/gatherings-list.svg"
          width={72}
          height={72}
          alt="gatherings-list"
        />
        <section className="">
          <p className="font-body text-body-1">함께 할 사람이 없나요?</p>
          <p className="text-subhead-3 font-title sm:text-display-1 mt-1">
            지금 모임에 참여해보세요
          </p>
        </section>
      </div>

      <div className="flex justify-between items-center font-title">
        <Category />
        <Link href="/create">
          <Button variant="primary" rounded="full">
            모임 만들기
          </Button>
        </Link>
      </div>

      <div className="flex justify-start items-center font-title gap-2 py-4 border-b-2 border-gray-6">
        <Button variant="primary">전체</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 py-5">
        <div className="bg-white border-2 border-gray-6 rounded-3xl h-40"></div>
        <div className="bg-white border-2 border-gray-6 rounded-3xl h-40"></div>
        <div className="bg-white border-2 border-gray-6 rounded-3xl h-40"></div>
      </div>
    </div>
  );
}

export default Gatherings;
