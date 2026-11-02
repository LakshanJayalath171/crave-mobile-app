import { getAllProduct } from "@/services/productApi";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
  });
};

export default useProducts;
