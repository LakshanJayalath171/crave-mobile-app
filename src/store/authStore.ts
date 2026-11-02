import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  role: string;
  birth_date: string;
  favorite_dishes: string[];
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  initializeAuth: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setLoading: (isLoading) => set({ isLoading }),

  initializeAuth: async () => {
    const token = await SecureStore.getItemAsync("token");

    if (!token) {
      delete axiosInstance.defaults.headers.common.Authorization;
      set({ user: null, isAuthenticated: false, isLoading: false });
      return;
    }

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const response = await axiosInstance.get("/auth/user/profile");
      const userData: User = response.data;
      set({ user: userData, isAuthenticated: true });
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      delete axiosInstance.defaults.headers.common.Authorization;
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      await SecureStore.deleteItemAsync("token");
    } finally {
      delete axiosInstance.defaults.headers.common.Authorization;
      set({ user: null, isAuthenticated: false });
    }
  },
}));
