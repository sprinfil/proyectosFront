import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types/User";

const ZustandPrincipal = create(
  persist(
    (set) => ({
      user: {},
      setUser: (userData: User) => set({ user: userData }),
    }),
    {
      name: "zustand-storage",
      partialize: (state: any) => ({
        user: state.user,
      }),
    }
  )
);

export default ZustandPrincipal;
