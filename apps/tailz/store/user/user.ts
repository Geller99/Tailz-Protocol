
// authStore.js
import { create } from 'zustand';

interface AuthProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const useAuthStore = create<AuthProps>()((set) => ({
  isAuthenticated: true,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;