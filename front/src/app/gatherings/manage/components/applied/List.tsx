import Card from "./Card";

interface ListProps {
  type?: "all" | "study" | "project";
}

function List({ type }: ListProps) {
  const studyData = [
    {
      id: 1,
      title: "React 심화 스터디 구함",
      location: "온라인",
      skills: ["React", "TypeScript"],
      description: "React 심화 스터디원 구함!!!!!",
      date: "2024-09-10",
      time: "12:00",
      participants: "10/20",
    },
  ];

  const projectData = [
    {
      id: 42,
      title: "Next.js로 프로젝트 만드실 분",
      location: "서울",
      skills: ["React", "TypeScript"],
      description: "Next.js로 개발자 모임 어플 만들 분들 구함",
      date: "2024-09-15",
      time: "12:00",
      participants: "5/10",
    },
  ];

  const allData = [...studyData, ...projectData];

  const dataToRender =
    type === "study" ? studyData : type === "project" ? projectData : allData;

  return (
    <div>
      {dataToRender.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          location={item.location}
          skills={item.skills}
          description={item.description}
          date={item.date}
          time={item.time}
          participants={item.participants}
          onCancel={() => console.log("취소")}
        />
      ))}
    </div>
  );
}

export { List as AppliedList };
