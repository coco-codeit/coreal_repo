import Card from "./Card";

interface ListProps {
  type?: "all" | "study" | "project";
}

function List({ type = "all" }: ListProps) {
  const studyData = [
    {
      id: "1",
      title: "React 스터디원 구함",
      location: "온라인",
      skills: ["React", "TypeScript"],
      description: "React 심화 스터디원 구함!!!!!",
      date: "2024-09-10",
      time: "12:00",
      participants: "10/20",
      participantsList: [{ name: "참여자1" }, { name: "참여자2" }],
    },
  ];

  const projectData = [
    {
      id: "42",
      title: "Next.js로 개발자 모임 어플 만드실 분들",
      location: "서울",
      skills: ["Next.js", "Node.js"],
      description: "Next.js로 개발자 모임 어플 만들 분들 구함",
      date: "2024-09-15",
      time: "18:00",
      participants: "5/10",
      participantsList: [{ name: "참여자1" }, { name: "참여자3" }],
    },
  ];

  const allData = [...studyData, ...projectData];

  const dataToRender =
    type === "study" ? studyData : type === "project" ? projectData : allData;

  return (
    <div>
      {dataToRender.map((item) => (
        <Card
          id={item.id}
          key={item.id}
          title={item.title}
          location={item.location}
          skills={item.skills}
          description={item.description}
          date={item.date}
          time={item.time}
          participants={item.participants}
          participantsList={item.participantsList}
          onEdit={() => console.log("수정")}
          onManage={() => console.log("관리")}
          onApprove={() => console.log("승인")}
          onReject={() => console.log("거절")}
        />
      ))}
    </div>
  );
}

export { List as CreatedList };
