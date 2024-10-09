// store/authStore.ts
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      setIsLoggedIn: (status: boolean) => set({ isLoggedIn: status }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useAuthStore;
