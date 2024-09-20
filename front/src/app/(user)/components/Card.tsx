import { DataInterface } from "@/types/common";
import Image from "next/image";

export default function Card({ data }: { data: DataInterface }) {
  return (
    <div className="flex flex-row">
      <Image
        src={"/"}
        width={100}
        height={100}
        alt="thumbnail"
        className="flex-none"
      />
      <div className="flex-grow">
        <p>
          {data?.title} | <span>{data?.location}</span>
        </p>
        <p>
          {`${data?.duration?.start_date}-${data?.duration?.end_date}`}
          <span>
            {" "}
            {`${data?.participants_count}/${data?.max_participants}`}
          </span>
        </p>
      </div>
    </div>
  );
}
