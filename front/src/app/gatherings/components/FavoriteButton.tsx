"use client";

import { MouseEvent, useEffect, useState } from "react";
import useFavoritesStore from "@/stores/useFavoritesStore";
import { HeartIcon } from "@/app/gatherings/components/list/Icons";

function FavoriteButton({ gatheringId }: { gatheringId: number }) {
  const { favorites, toggleFavorite, setFavoritesFromStorage } =
    useFavoritesStore();
  const [isClientReady, setIsClientReady] = useState(false);
  const [isLikedState, setIsLikedState] = useState(false);
  const isLikedGlobal = favorites.has(gatheringId);

  useEffect(() => {
    setIsClientReady(true);
    setFavoritesFromStorage();
  }, [setFavoritesFromStorage]);

  useEffect(() => {
    setIsLikedState(isLikedGlobal);
  }, [isLikedGlobal]);

  const handleFavoriteToggle = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsLikedState((prev) => !prev);

    setTimeout(() => {
      toggleFavorite(gatheringId);
    }, 500);
  };

  return (
    <div
      className={`flex justify-center items-center w-12 h-12 cursor-pointer rounded-full focus:outline-none border-2 border-gray-200 
        ${isLikedState ? "bg-gray-900 border-none" : "bg-white"}`}
      onClick={handleFavoriteToggle}
    >
      <HeartIcon liked={isClientReady ? isLikedState : false} />
    </div>
  );
}

export default FavoriteButton;
