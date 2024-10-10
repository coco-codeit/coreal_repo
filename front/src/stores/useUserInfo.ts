import { create } from "zustand";

interface UserInfoInterface {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  image: string | undefined;
  companyName: string | undefined;
  setId: (id: number) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setImage: (image: string) => void;
  setCompanyName: (companyName: string) => void;
}

const useUserInfo = create<UserInfoInterface>()((set) => ({
  id: undefined,
  name: undefined,
  email: undefined,
  image: undefined,
  companyName: undefined,
  setId: (id) => set({ id }),
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setImage: (image) => set({ image }),
  setCompanyName: (companyName) => set({ companyName }),
}));

export default useUserInfo;
