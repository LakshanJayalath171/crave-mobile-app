import axiosInstance from "@/api/axiosInstance";

const getAllProduct = async () => {
  const response = await axiosInstance.get("/user/products");
  return response.data.data;
};

export { getAllProduct };

