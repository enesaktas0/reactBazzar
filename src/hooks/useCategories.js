import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/apiCategories";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function useCategories() {
  const loacation = useLocation();

  const [filterValue, setFilterValue] = useState("home");

  const pathname = loacation.pathname;
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: [`categories-${filterValue}`],
    queryFn:()=> getCategories({filterValue}),
  });

  useEffect(() => {
    if (pathname === "/" || pathname === "/home") setFilterValue("home");
    else setFilterValue("all");
    refetch();
  }, [filterValue, pathname, refetch]);
  return { categories, isLoading, error };
}
