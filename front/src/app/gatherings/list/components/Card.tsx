import { useRouter } from "next/navigation";
import { Gatherings } from "@/types/gatherings";
import CardImage from "@/app/gatherings/list/components/CardImage";
import CardHeader from "@/app/gatherings/list/components/CardHeader";
import CardParticipants from "@/app/gatherings/list/components/CardParticipants";

interface CardProps {
  data: Gatherings[];
}

function Card({ data }: CardProps) {
  const router = useRouter();

  // 모임 상세 페이지로 이동
  const handleCardClick = (id: number) => {
    router.push(`/gatherings/${id}/detail`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 py-6 w-full">
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="h-[316px] md:h-[156px] grid grid-rows-[156px_1fr] md:grid-cols-[280px_1fr] cursor-pointer"
              onClick={() => handleCardClick(item.id)}
            >
              <CardImage image={item.image} name={item.name} />

              <div className="flex flex-col border-2 border-gray-100 py-4 px-4 md:pl-6 rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl">
                <CardHeader
                  name={item.name}
                  location={item.location}
                  dateTime={item.dateTime}
                />
                <CardParticipants
                  capacity={item.capacity}
                  participantCount={item.participantCount}
                />
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-body-1 text-gray-500 items-center justify-center md:mt-[355px] lg:mt-[335px] mt-[224px] w-full text-center">
          <p>아직 모임이 없어요.</p>
          <p>지금 바로 모임을 만들어보세요.</p>
        </div>
      )}
    </div>
  );
}

export default Card;
