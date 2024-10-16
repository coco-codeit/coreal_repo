import Image from "next/image";
import useFavoritesStore from "@/stores/useFavoritesStore";

interface ByeProps {
  gatheringId: number;
}

function Bye({ gatheringId }: ByeProps) {
  const { toggleFavorite } = useFavoritesStore();

  const handleRemoveFavorite = () => {
    toggleFavorite(gatheringId);
  };

  return (
    <div className="absolute inset-0 md:h-[156px] bg-black bg-opacity-80 rounded-3xl flex items-center justify-center">
      <div className="text-center">
        <div className="text-sm text-white mb-[24px] md:mb-0">
          마감된 챌린지에요.
          <br />
          다음 기회에 만나요 🙏
        </div>
        <button
          onClick={handleRemoveFavorite}
          className="md:hidden px-3 py-[6px] rounded-xl h-9 bg-gray-900 flex flex-row gap-[2px] justify-center items-center"
        >
          <Image src="/images/bye.svg" alt="bye" height={24} width={24} />
          <span className="text-white text-xs">모임 보내주기</span>
        </button>
      </div>
      <div
        onClick={handleRemoveFavorite}
        className="absolute top-4 right-4 hidden md:flex cursor-pointer"
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-900">
          <Image src="/images/bye.svg" alt="bye" height={24} width={24} />
        </div>
      </div>
    </div>
  );
}

export default Bye;
