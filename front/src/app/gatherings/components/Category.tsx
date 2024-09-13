import { useState } from "react";
import { StudyIcon, ProjectIcon } from "@/app/gatherings/components/Icons";

function Category() {
  const [category, setCategory] = useState("study");

  return (
    <>
      <div className="flex justify-center items-center gap-3 text-subhead-3">
        {/* 스터디 버튼 */}
        <button
          className={`flex items-center gap-1 py-2 ${
            category === "study"
              ? "border-b-2 border-black text-black"
              : "border-gray-400 text-gray-400"
          }`}
          onClick={() => setCategory("study")}
        >
          스터디
          <StudyIcon isSelected={category === "study"} />
        </button>

        {/* 프로젝트 버튼 */}
        <button
          className={`flex items-center gap-1 py-2 ${
            category === "project"
              ? "border-b-2 border-black text-black"
              : "border-gray-400 text-gray-400"
          }`}
          onClick={() => setCategory("project")}
        >
          프로젝트
          <ProjectIcon isSelected={category === "project"} />
        </button>
      </div>
    </>
  );
}

export default Category;
