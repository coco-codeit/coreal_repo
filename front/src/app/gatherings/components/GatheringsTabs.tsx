import { useGatheringStore } from "@/app/hooks/gatherings/useGatheringStore";
import {
  DallaemfitIcon,
  WorkationIcon,
} from "@/app/gatherings/components/Icons";
import Button from "@/app/gatherings/components/Button";
import { GatheringType } from "@/app/types/gatherings";

const tabs = {
  DALLAEMFIT: {
    label: "달램핏",
    value: "DALLAEMFIT" as GatheringType,
    Icon: DallaemfitIcon,
    subTabs: [
      { label: "전체", value: "DALLAEMFIT" as GatheringType },
      { label: "오피스 스트레칭", value: "OFFICE_STRETCHING" as GatheringType },
      { label: "마인드풀니스", value: "MINDFULNESS" as GatheringType },
    ],
  },
  WORKATION: {
    label: "워케이션",
    value: "WORKATION" as GatheringType,
    Icon: WorkationIcon,
    subTabs: [{ label: "전체", value: "WORKATION" as GatheringType }],
  },
};

function GatheringsTabs() {
  const { tab, setTab } = useGatheringStore();

  const isDallaemfitActive = [
    "DALLAEMFIT",
    "OFFICE_STRETCHING",
    "MINDFULNESS",
  ].includes(tab);

  const currentSubTabs = isDallaemfitActive
    ? tabs["DALLAEMFIT"].subTabs
    : tabs["WORKATION"].subTabs;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start font-title ">
        <div className="flex justify-center items-center gap-3 text-subhead-3">
          {Object.values(tabs).map(({ label, value, Icon }) => (
            <button
              key={value}
              className={`flex items-center gap-1 border-b-2 pb-1 ${
                isDallaemfitActive && value === "DALLAEMFIT"
                  ? "border-black text-black"
                  : tab === value
                    ? "border-black text-black"
                    : "border-white text-gray-400"
              }`}
              onClick={() => setTab(value)}
            >
              {label}
              <Icon isSelected={isDallaemfitActive && value === "DALLAEMFIT"} />
            </button>
          ))}
        </div>

        <Button variant="primary" type="create">
          모임 만들기
        </Button>
      </div>

      <div className="flex justify-start items-center font-title gap-2 pb-[14px] border-b-2 border-gray-200">
        {currentSubTabs.map(({ label, value }) => (
          <Button
            key={value}
            variant={tab === value ? "dark" : "light"}
            type="tab"
            onClick={() => setTab(value)}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default GatheringsTabs;
