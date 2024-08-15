import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function useProducts() {
  const loacation = useLocation();

  const [searchParams] = useSearchParams();

  const filterOption = searchParams.get("category");

  const filter = Boolean(filterOption)
    ? { column: "category", value: filterOption }
    : { value: "all" };

  const [filterValue, setFilterValue] = useState("home");

  const pathname = loacation.pathname;

  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: [`products-${filterValue}-${filter.value}`],
    queryFn: () => getProducts({ filterValue, filter }),
  });

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/home" ||
      pathname === "/cart" ||
      pathname === "/order/new"
    )
      setFilterValue("home");
    else setFilterValue("all");
    refetch();
  }, [filterValue, pathname, refetch]);

  return { products, isLoading, error };
}
