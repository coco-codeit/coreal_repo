export default function RecruitmentStatus() {
  interface DeveloperTypeItem {
    title: string;
    current: number;
    total: number;
  }

  const developerTypes = [
    { title: "웹프론트엔드", current: 1, total: 4 },
    { title: "웹프론트엔드", current: 2, total: 4 },
    { title: "백엔드", current: 2, total: 4 },
    { title: "안드개발자", current: 1, total: 3 },
    { title: "AI개발자", current: 1, total: 4 },
    { title: "IOS개발자", current: 1, total: 2 },
  ];

  const DeveloperTypeItem = ({ title, current, total }: DeveloperTypeItem) => (
    <div className="flex w-[222px] justify-between items-center">
      <span className="text-2xl text-[#9a9a9a]">{title}</span>
      <span className="text-2xl text-[#484848]">
        {current}/{total}
      </span>
    </div>
  );

  return (
    <div className="w-[753px] h-[210px] p-10 rounded-lg bg-[#f4f5f6]">
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        {developerTypes.map((developerType, title) => (
          <DeveloperTypeItem key={title} {...developerType} />
        ))}
      </div>
    </div>
  );
}
