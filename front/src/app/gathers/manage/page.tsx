import { GatheringTabs } from "@/app/components/manage/Tabs";
import AppliedGatherings from "@/app/components/manage/contents/AppliedGatherings";
import CreatedGatherings from "@/app/components/manage/contents/CreatedGatherings";

function ManageGatheringsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-20">
      <div className="w-[1200px] h-screen">
        <GatheringTabs>
          <AppliedGatherings />
          <CreatedGatherings />
        </GatheringTabs>
      </div>
    </div>
  );
}

export default ManageGatheringsPage;
