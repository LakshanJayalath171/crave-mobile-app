import axiosInstance from "@/api/axiosInstance";

const getAllCategory = async () => {
  const response = await axiosInstance.get("/user/categories");
  return response.data.data;
};

export { getAllCategory };

