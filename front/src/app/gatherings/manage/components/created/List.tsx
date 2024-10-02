import { useEffect, useState } from "react";
import Card from "./Card";

interface ListProps {
  type?: "all" | "study" | "project";
  organizer?: string;
}

interface Data {
  id: string;
  title: string;
  oranizer: string;
  connection: string;
  skills: string[];
  content: string;
  startDateTime: string;
  participant: number;
  capacity: number;
  image: string;
  type: "study" | "project";
  recruitment?: { field: string; participant: number; capacity: number }[];
}

interface Participant {
  userId: number;
  userNickname: string;
  userProfileImage: string;
  userTemp: number;
  userSkills: string[];
  position: string;
}

function List({ type = "all", organizer = "선남" }: ListProps) {
  const [data, setData] = useState<Data[]>([]);
  const [participants, setParticipants] = useState<
    Record<string, Participant[]>
  >({});

  useEffect(() => {
    fetch("http://localhost:5000/gatheringsManage")
      .then((response) => response.json())
      .then((result) => {
        const studyData = result[0].study.map((item: Data) => ({
          ...item,
          type: "study",
        }));
        const projectData = result[1].project.map((item: Data) => ({
          ...item,
          type: "project",
        }));

        let allData: Data[] = [...studyData, ...projectData];

        if (type !== "all") {
          allData = allData.filter((item) => item.type === type);
        }

        const filteredData = allData.filter(
          (item) => item.oranizer === organizer,
        );
        setData(filteredData);

        const participantsData = result[2].participants.reduce(
          (
            participantMap: Record<string, Participant[]>,
            item: { id: string; applicantsPending: Participant[] },
          ) => {
            participantMap[item.id] = item.applicantsPending;
            return participantMap;
          },
          {},
        );
        setParticipants(participantsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [type, organizer]);

  if (data.length === 0) return <div>없어요!</div>;

  return (
    <div>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          connection={item.connection}
          skills={item.skills}
          content={item.content}
          startDateTime={item.startDateTime}
          participant={item.participant}
          capacity={item.capacity}
          imageUrl={item.image}
          recruitment={participants[item.id]}
          type={item.type}
          onEdit={() => console.log("수정")}
          onManage={() => console.log("관리")}
          onApprove={(name) => console.log(`${name} 승인`)}
          onReject={(name) => console.log(`${name} 거절`)}
        />
      ))}
    </div>
  );
}

export { List as CreatedList };
