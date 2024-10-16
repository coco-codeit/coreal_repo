import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IGatherings } from "@/types/gatherings";
import CardImage from "@/app/gatherings/components/card/CardImage";

interface CardProps {
  data: IGatherings;
  showExpiration?: boolean;
}

function Card({ data, showExpiration }: CardProps) {
  const router = useRouter();
  const now = new Date();
  const isExpired = new Date(data.registrationEnd) < now;

  const handleCardClick = (id: number) => {
    if (showExpiration && isExpired) {
      return;
    }
    router.push(`/gatherings/${id}/detail`);
  };

  return (
    <motion.div
      key={data.id}
      className={`relative h-[316px] md:h-[156px] grid grid-rows-[156px_1fr] rounded-3xl border border-gray-100 md:grid-cols-[280px_1fr] ${showExpiration && isExpired ? "" : "cursor-pointer"}`}
      onClick={() => handleCardClick(data.id)}
      whileHover={{
        boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <CardImage image={data.image} name={data.name} endTime={data.dateTime} />
    </motion.div>
  );
}

export default Card;
