import { getAllCategory } from "@/services/categoryApi";
import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategory,
  });
};

export default useCategory;
