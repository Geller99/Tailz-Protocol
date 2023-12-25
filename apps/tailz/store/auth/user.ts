
// authStore.js
import { create } from 'zustand';
import { UserProps } from '../../app/signup/page';

interface AuthProps {
    isAuthenticated: boolean;
    user?: UserProps
    setUser?: any
    login?: (userData: UserProps) => void
    logout: () => void;
}


const useAuthStore = create<AuthProps>()((set) => ({
  isAuthenticated: false, // Initially, the user is not authenticated
  user: null, // Initially, there is no user data

  // Modify auth state and set user data

  setUser: (user: UserProps) => set((state) => ({
    ...state,
    user: user,
  })),

  login: (user: UserProps) => set({ isAuthenticated: true, user }),

  // Modify the logout function to also clear user data
  logout: () => set({ isAuthenticated: false, user: null }),
}));


export default useAuthStore; 