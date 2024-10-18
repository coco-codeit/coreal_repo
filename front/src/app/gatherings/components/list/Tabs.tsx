import { usePathname } from "next/navigation";
import { GatheringType } from "@/types/gatherings";
import { useGatheringsStore } from "@/stores/useGatheringsStore";
import { tabConfig } from "@/app/gatherings/components/list/config";
import Button from "@/app/gatherings/components/Button";
import CreateButton from "@/app/gatherings/components/list/CreateButton";
import { motion } from "framer-motion";

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
      <div className="relative flex justify-between items-start">
        <ul className="flex items-center gap-3 text-lg font-semibold">
          {Object.values(tabConfig).map((tabItem) => {
            const isSelected = tab === tabItem.value;
            const isActiveDallaemfit =
              isDallaemfitActive && tabItem.value === "DALLAEMFIT";

            return (
              <li
                key={tabItem.value}
                className={`relative flex items-center gap-1 pb-1 ${isSelected ? "bg-white" : ""} ${
                  isActiveDallaemfit
                    ? "text-gray-900"
                    : isSelected
                      ? "text-gray-900"
                      : "text-gray-400"
                } cursor-pointer select-none`}
                onClick={() => setTab(tabItem.value)}
              >
                {`${tabItem.label}`}
                <tabItem.Icon
                  isSelected={
                    isSelected ||
                    (isActiveDallaemfit && tabItem.value === "DALLAEMFIT")
                  }
                />
                {(isSelected || isActiveDallaemfit) && (
                  <motion.div
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 50,
                    }}
                    suppressHydrationWarning={true}
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 rounded-[1px]"
                    key="underline"
                  />
                )}
              </li>
            );
          })}
        </ul>
        {showCreateButton && <CreateButton />}
      </div>
      <div className="flex items-center text-sm gap-2 pb-[14px] border-b-2 border-gray-200">
        {currentSubTabs.map(SubTabs)}
      </div>
    </div>
  );
}

export default Tabs;
