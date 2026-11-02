import { useQuery } from "@tanstack/react-query";

import axiosInstance from "../api/axiosInstance";

import {
    CategorizedProducts,
    groupProductsByCategory,
    Product,
} from "../utils/groupProduct";

const getCategorizedProducts = async (): Promise<CategorizedProducts[]> => {
  const response = await axiosInstance.get("/user/products");

  const products: Product[] = response.data.data;

  return groupProductsByCategory(products);
};

export const useCategorizedProducts = () => {
  return useQuery({
    queryKey: ["products", "categorized"],
    queryFn: getCategorizedProducts,

    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};
