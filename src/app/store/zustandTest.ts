import { create } from "zustand"

interface UserState {
  user: {
    name: string
    email: string
  }
  setUser: (newUser: { name: string; email: string }) => void
  clearUser: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: { name: "", email: "" },

  setUser: (newUser) => set({ user: newUser }),
  clearUser: () => set({ user: { name: "", email: "" } }),
}))
