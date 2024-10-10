import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Button from "@/app/gatherings/components/Button";
import { GatheringType } from "@/types/gatherings";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import CreateGatheringModal from "../../create/CreateGatheringModal";
import {
  DallaemfitIcon,
  WorkationIcon,
} from "@/app/gatherings/list/components/Icons";
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
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const openModal = () => {
    if (session) {
      setIsOpen(true);
    } else {
      signIn();
    }
  };
  const isDallaemfitActive = [
    "DALLAEMFIT",
    "OFFICE_STRETCHING",
    "MINDFULNESS",
  ].includes(tab);

  const currentSubTabs = isDallaemfitActive
    ? tabConfig["DALLAEMFIT"].subTabs
    : tabConfig["WORKATION"].subTabs;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start font-title ">
        <div className="flex justify-center items-center gap-3 text-subhead-3">
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
              <Icon isSelected={isDallaemfitActive && value === "DALLAEMFIT"} />
            </button>
          ))}
        </div>

        <Button
          className="font-semibold px-[18px] md:px-[21px] py-[10px]"
          style="solid"
          size="responsive"
          onClick={openModal}
        >
          모임 만들기
        </Button>
        {isOpen && (
          <CreateGatheringModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>

      <div className="flex justify-start items-center font-title gap-2 pb-[14px] border-b-2 border-gray-200">
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
  );
}

export default Tabs;
