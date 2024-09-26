import { GatheringTabs } from "./components/manage/Tabs";

function ManageGatheringsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-20">
      <div className="w-[1200px] h-screen">
        <GatheringTabs />
      </div>
    </div>
  );
}

export default ManageGatheringsPage;
