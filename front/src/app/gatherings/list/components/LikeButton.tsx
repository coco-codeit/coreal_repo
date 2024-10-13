"use client";

import { MouseEvent, useEffect, useState } from "react";
import useFavoritesStore from "@/stores/useFavoritesStore";
import { HeartIcon } from "@/app/gatherings/list/components/Icons";

function LikeButton({ gatheringId }: { gatheringId: number }) {
  const { favorites, toggleFavorite, setFavoritesFromStorage } =
    useFavoritesStore();
  const [isClientReady, setIsClientReady] = useState(false);

  const isLiked = favorites.has(gatheringId);

  useEffect(() => {
    setIsClientReady(true);
    setFavoritesFromStorage();
  }, [setFavoritesFromStorage]);

  const handleFavoriteToggle = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleFavorite(gatheringId);
  };

  return (
    <div
      className={`flex justify-center items-center w-12 h-12 cursor-pointer rounded-full focus:outline-none border-2 border-gray-200 
        ${isLiked ? "bg-orange-50 border-none" : "bg-white"}`}
      onClick={handleFavoriteToggle}
    >
      <HeartIcon liked={isClientReady ? isLiked : false} />
    </div>
  );
}

export default LikeButton;
