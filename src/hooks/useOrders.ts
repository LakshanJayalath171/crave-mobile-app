import { getAllOrders } from "@/services/orderApi";
import { useAuthStore } from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";

export interface Order {
  _id: string;
  total_price: number;
  createdAt: string;
  items: Array<unknown>;
  status: string;
}

export const useOrders = () => {
  const userId = useAuthStore((state) => state.user?.data._id);

  return useQuery({
    queryKey: ["orders", userId],
    queryFn: () => {
      if (!userId) {
        throw new Error("Cannot fetch orders without an authenticated user.");
      }

      return getAllOrders(userId) as Promise<Order[]>;
    },
    enabled: Boolean(userId),
  });
};
