"use client";

import { useEffect, useState } from "react";
import { GatheringItemInterface } from "@/types/common";
import { getGatherings } from "@/apis/profile";
import GatheringItem from "./components/GatheringItem";
import { Select, OptionInterface } from "../components/Select";

const options = [
  { value: "all", label: "전체" },
  { value: "gathering", label: "스터디" },
  { value: "project", label: "프로젝트" },
];

// 작성자 : 이은혁
// 추후 pagination 추가, ssr로 변경 필요
// => select 상태 대신 쿼리스트링 이용

export default function ManageReviews() {
  const [select, setSelect] = useState<OptionInterface>(options[0]);
  const [data, setData] = useState<GatheringItemInterface[]>();

  useEffect(() => {
    const getData = async () => {
      const data = await getGatherings(select.value);
      console.log(data);
      setData(data);
    };
    getData();
  }, []);

  return (
    <div className="container mx-auto max-w-[1024px]">
      <Select
        list={options}
        defaultValue={options[0]}
        onChange={setSelect}
        className="mb-6"
      />
      <section>
        {data?.map((gathering, index) => (
          <GatheringItem
            key={`${gathering}-${index}`}
            className="bg-[#f6f6f6] rounded-lg border border-gray-5 p-4 mb-4"
            gathering={gathering}
          />
        ))}
      </section>
    </div>
  );
}
