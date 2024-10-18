import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IGatherings } from "@/types/gatherings";
import CardHeader from "@/app/gatherings/components/card/CardHeader";
import CardImage from "@/app/gatherings/components/card/CardImage";
import CardParticipants from "@/app/gatherings/components/card/CardParticipants";
import Bye from "@/app/favorites/components/Bye";

interface CardProps {
  data: IGatherings;
  isFavoritesPage?: boolean;
}

function Card({ data, isFavoritesPage = false }: CardProps) {
  const router = useRouter();
  const [isGatheringClosed, setIsGatheringClosed] = useState(false);

  useEffect(() => {
    if (isFavoritesPage) {
      const now = new Date();
      setIsGatheringClosed(new Date(data.registrationEnd) < now);
    }
  }, [isFavoritesPage, data.registrationEnd]);

  const handleCardClick = (id: number) => {
    if (isFavoritesPage && isGatheringClosed) return;
    router.push(`/gatherings/${id}/detail`);
  };

  return (
    <motion.div
      key={data.id}
      className={`relative h-[316px] md:h-[156px] grid grid-rows-[156px_1fr] rounded-3xl border border-gray-100 md:grid-cols-[280px_1fr] ${
        isFavoritesPage && isGatheringClosed ? "" : "cursor-pointer"
      }`}
      onClick={() => handleCardClick(data.id)}
      whileHover={{
        boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <CardImage
        image={data.image}
        registrationEnd={data.registrationEnd}
        deadlineText={data.deadlineText}
      />
      <div className="flex flex-col border-2 border-gray-100 py-4 px-4 md:pl-6 rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl">
        <CardHeader
          id={data.id}
          name={data.name}
          location={data.location}
          dateTime={data.dateTime}
        />
        <CardParticipants
          dateTime={data.dateTime}
          capacity={data.capacity}
          participantCount={data.participantCount}
          isClosed={data.isClosed}
        />
      </div>

      {isFavoritesPage && isGatheringClosed && <Bye gatheringId={data.id} />}
    </motion.div>
  );
}

export default Card;
