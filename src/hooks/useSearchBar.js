import { useQuery } from "@tanstack/react-query";
import { useBasket } from "../contexts/UserReducer";
import { getSearchProducts } from "../services/apiSearchBar";
import { useEffect } from "react";

export function useSearchBar() {
  const { query } = useBasket();
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: [`search`],
    queryFn: () => getSearchProducts({ query }),
  });

  useEffect(() => {
    refetch();
  }, [query, refetch]);

  return { products, isLoading, error };
}
