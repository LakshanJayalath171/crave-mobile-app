import axiosInstance from "@/api/axiosInstance";

export const getAllOrders = async (userId: string) => {
  const response = await axiosInstance.get(`/user/orders/${userId}`);
  return response.data.data;
};
