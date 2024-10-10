import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { UserProfileInterface } from "@/types/common";

interface AuthState {
  isLoggedIn: boolean;
  userInfo: UserProfileInterface | null;
  setIsLoggedIn: (status: boolean) => void;
  setUserInfo: (user: UserProfileInterface | null) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userInfo: null,
      setIsLoggedIn: (status: boolean) => set({ isLoggedIn: status }),
      setUserInfo: (user: UserProfileInterface | null) =>
        set({ userInfo: user }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAuthStore;
