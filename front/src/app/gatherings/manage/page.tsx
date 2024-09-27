import { GatheringTabs } from "./components/manage/Tabs";

function ManageGatheringsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-20 font-title">
      <div className="lg:w-[1052px] md:w-[510px] w-[343px] lg:top-[160px] md:top-[112px]  top-20 absolute rounded-2xl bg-white shadow-custom lg:p-8 p-6">
        <GatheringTabs />
      </div>
    </div>
  );
}

export default ManageGatheringsPage;
