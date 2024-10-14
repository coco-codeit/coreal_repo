import Button from "@/app/gatherings/components/Button";
import { GatheringType } from "@/types/gatherings";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import {
  DallaemfitIcon,
  WorkationIcon,
} from "@/app/gatherings/list/components/Icons";
import CreateButton from "./CreateButton";

const tabConfig = {
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

function Tabs() {
  const { tab, setTab } = useGatheringsStore();

  const isDallaemfitActive = [
    "DALLAEMFIT",
    "OFFICE_STRETCHING",
    "MINDFULNESS",
  ].includes(tab);

  const currentSubTabs = isDallaemfitActive
    ? tabConfig["DALLAEMFIT"].subTabs
    : tabConfig["WORKATION"].subTabs;

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3  text-lg font-semibold ">
            {Object.values(tabConfig).map(({ label, value, Icon }) => (
              <button
                key={value}
                className={`flex items-center gap-1 border-b-2 pb-1 ${
                  isDallaemfitActive && value === "DALLAEMFIT"
                    ? "border-gray-900 text-gray-900"
                    : tab === value
                      ? "border-gray-900 text-gray-900"
                      : "border-none text-gray-400"
                }`}
                onClick={() => setTab(value)}
              >
                {label}
                <Icon
                  isSelected={isDallaemfitActive && value === "DALLAEMFIT"}
                />
              </button>
            ))}
          </div>
          <CreateButton />
        </div>
        <div className="flex items-center text-sm gap-2 pb-[14px] border-b-2 border-gray-200">
          {currentSubTabs.map(({ label, value }) => (
            <Button
              key={value}
              style={tab === value ? "active" : "default"}
              onClick={() => setTab(value)}
              size="responsive"
              className="px-[12px] py-[8px] md:px-4 md:py-[10px]"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tabs;
