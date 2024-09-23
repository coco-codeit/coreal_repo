import React, { useEffect, useState } from "react";
import Card from "./Card";

interface ListProps {
  type?: "all" | "study" | "project";
}

interface Data {
  id: string;
  title: string;
  image: string;
  content: string;
  startDateTime: string;
  participant: number;
  capacity: number;
  connection: string;
  skills: string[];
  recruitment?: { field: string; participant: number; capacity: number }[];
}

function List({ type }: ListProps) {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/gatheringsManage")
      .then((response) => response.json())
      .then((result) => {
        let filteredData: Data[] = [];

        if (type === "study") {
          filteredData = result[0].study;
        } else if (type === "project") {
          filteredData = result[1].project;
        } else {
          filteredData = [...result[0].study, ...result[1].project];
        }

        setData(filteredData);
      });
  }, [type]);

  return (
    <div>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          connection={item.connection}
          skills={item.skills}
          content={item.content}
          satrtDateTime={item.startDateTime}
          participant={item.participant}
          capacity={item.capacity}
          imageUrl={item.image}
          onCancel={() => console.log("취소")}
          recruitment={item.recruitment}
          type={item.recruitment ? "project" : "study"}
        />
      ))}
    </div>
  );
}

export { List as AppliedList };
