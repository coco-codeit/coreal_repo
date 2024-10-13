import { create } from "zustand";

interface FavoriteStore {
  favorites: Set<number>;
  toggleFavorite: (id: number) => void;
  setFavoritesFromStorage: () => void;
}

const useFavoritesStore = create<FavoriteStore>((set) => ({
  favorites: new Set<number>(),

  toggleFavorite: (id: number) => {
    set((state) => {
      const updatedFavorites = new Set(state.favorites);

      if (updatedFavorites.has(id)) {
        updatedFavorites.delete(id);
      } else {
        updatedFavorites.add(id);
      }

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "favorites",
          JSON.stringify(Array.from(updatedFavorites)),
        );
      }

      return { favorites: updatedFavorites };
    });
  },

  setFavoritesFromStorage: () => {
    if (typeof window !== "undefined") {
      const storedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]",
      );

      const favoritesSet = new Set<number>(storedFavorites);
      set({ favorites: favoritesSet });
    }
  },
}));

export default useFavoritesStore;
