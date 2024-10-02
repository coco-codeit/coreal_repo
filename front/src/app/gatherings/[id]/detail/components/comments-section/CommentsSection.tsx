import React from "react";
import CommentsCard from "./CommentsCard";

export default function CommentsSection() {
  return (
    <section className="mt-6 p-6 border-t-2 border-[#E5E7EB]">
      <h2 className="text-[18px] font-semibold mb-[16px]">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h2>
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
      <CommentsCard />
    </section>
  );
}
