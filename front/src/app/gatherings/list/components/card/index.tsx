import { useRouter } from "next/navigation";
import { IGatherings } from "@/types/gatherings";
import CardImage from "@/app/gatherings/list/components/card/CardImage";
import CardHeader from "@/app/gatherings/list/components/card/CardHeader";
import CardParticipants from "@/app/gatherings/list/components/card/CardParticipants";

interface CardProps {
  data: IGatherings;
}

function Card({ data }: CardProps) {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/gatherings/${id}/detail`);
  };

  return (
    <div
      key={data.id}
      className="h-[316px] md:h-[156px] grid grid-rows-[156px_1fr] md:grid-cols-[280px_1fr] cursor-pointer"
      onClick={() => handleCardClick(data.id)}
    >
      <CardImage image={data.image} name={data.name} />

      <div className="flex flex-col border-2 border-gray-100 py-4 px-4 md:pl-6 rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl">
        <CardHeader
          name={data.name}
          location={data.location}
          dateTime={data.dateTime}
        />
        <CardParticipants
          capacity={data.capacity}
          participantCount={data.participantCount}
        />
      </div>
    </div>
  );
}

export default Card;
