import Card from "@/app/(user)/components/Card";
import Tabs from "@/app/(user)/components/Tabs";

export default function Gathers() {
  return (
    <div className="container mx-auto">
      <Tabs>
        <Tabs.TabsWrapper className="w-full text-center">
          <Tabs.Tab className="w-[50%] inline-block py-4 cursor-pointer data-[selected=true]:font-extrabold">
            나의 모임
          </Tabs.Tab>
          <Tabs.Tab className="w-[50%] inline-block py-4 cursor-pointer data-[selected=true]:font-extrabold">
            내가 만든 모임
          </Tabs.Tab>
        </Tabs.TabsWrapper>
        <Tabs.ContentsWrapper>
          <Tabs.Content>
            <Card
              data={{
                id: "1",
                type: "type",
                thumbnailUrl: "",
                title: "test",
                date: "2024.01.01",
                time: "12:12:11",
                location: "서울특별시 용산구",
                userStatus: "",
                gatherStatus: "",
              }}
            />
          </Tabs.Content>
          <Tabs.Content>내가 만든 모임 컨텐츠</Tabs.Content>
        </Tabs.ContentsWrapper>
      </Tabs>
    </div>
  );
}
