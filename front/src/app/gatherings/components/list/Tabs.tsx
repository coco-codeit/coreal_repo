import { usePathname } from "next/navigation";
import { GatheringType } from "@/types/gatherings";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { tabConfig } from "@/app/gatherings/components/list/config";
import Button from "@/app/gatherings/components/Button";
import CreateButton from "@/app/gatherings/components/list/CreateButton";

function Tabs() {
  const { tab, setTab } = useGatheringsStore();

  const pathname = usePathname();
  const showCreateButton = pathname !== "/favorites";

  const isDallaemfitActive = [
    "DALLAEMFIT",
    "OFFICE_STRETCHING",
    "MINDFULNESS",
  ].includes(tab);

  const currentSubTabs = isDallaemfitActive
    ? tabConfig["DALLAEMFIT"].subTabs
    : tabConfig["WORKATION"].subTabs;

  const MainTabs = ({
    label,
    value,
    Icon,
  }: {
    label: string;
    value: GatheringType;
    Icon: React.FC<{ isSelected: boolean }>;
  }) => {
    const isSelected = tab === value;
    const isActiveDallaemfit = isDallaemfitActive && value === "DALLAEMFIT";

    return (
      <button
        type="button"
        key={value}
        className={`flex items-center gap-1 border-b-2 pb-1 ${
          isActiveDallaemfit || isSelected
            ? "border-gray-900 text-gray-900"
            : "border-none text-gray-400"
        }`}
        onClick={() => setTab(value)}
      >
        {label}
        <Icon isSelected={isActiveDallaemfit} />
      </button>
    );
  };

  const SubTabs = ({
    label,
    value,
  }: {
    label: string;
    value: GatheringType;
  }) => (
    <Button
      type="button"
      key={value}
      style={tab === value ? "active" : "default"}
      onClick={() => setTab(value)}
      size="responsive"
      className="px-[12px] py-[8px] md:px-4 md:py-[10px]"
    >
      {label}
    </Button>
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3 text-lg font-semibold">
          {Object.values(tabConfig).map(MainTabs)}
        </div>
        {showCreateButton && <CreateButton />}
      </div>
      <div className="flex items-center text-sm gap-2 pb-[14px] border-b-2 border-gray-200">
        {currentSubTabs.map(SubTabs)}
      </div>
    </div>
  );
}

export default Tabs;
