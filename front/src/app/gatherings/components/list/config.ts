import { GatheringType } from "@/types/gatherings";
import {
  DallaemfitIcon,
  WorkationIcon,
} from "@/app/gatherings/components/list/Icons";

export const tabConfig = {
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
