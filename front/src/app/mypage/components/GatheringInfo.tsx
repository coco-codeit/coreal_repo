export default function GatheringInfo({
  info,
}: {
  info: {
    name: string;
    location: string;
    dateTime?: string;
    participantCount?: number;
    capacity?: number;
    type?: string;
    review?: string;
    score?: number;
  };
}) {
  const fullDateTime = (datetime: string) => {
    const fullDate = new Date(datetime);
    const month = fullDate.getMonth() + 1;
    const date = fullDate.getDate();
    const hour = fullDate.getHours();
    const minute = fullDate.getMinutes();

    return `${month}월 ${date}일 ${hour}:${minute}`;
  };

  return (
    <div>
      <p>
        <span>{info.name}</span>
        <span>{info.location}</span>
      </p>
      <p>
        <span>{info.dateTime && fullDateTime(info.dateTime)}</span>
        <span>
          {info.participantCount}/{info.capacity}
        </span>
      </p>
    </div>
  );
}
