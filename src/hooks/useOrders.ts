import { getAllOrders } from "@/services/orderApi";
import { useAuthStore } from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";

export const useOrders = () => {
  const userId = useAuthStore((state) => state.user?.data._id);

  return useQuery({
    queryKey: ["orders", userId],
    queryFn: () => {
      if (!userId) {
        throw new Error("Cannot fetch orders without an authenticated user.");
      }

      return getAllOrders(userId);
    },
    enabled: Boolean(userId),
  });
};
