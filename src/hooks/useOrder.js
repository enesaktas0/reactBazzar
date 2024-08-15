import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSelectedOrder } from "../services/apiSelectedOrder";

export function useOrder() {
  const { id: code } = useParams();

  const { data: order, isLoading } = useQuery({
    queryKey: [`order-${code}`],
    queryFn: () => getSelectedOrder({ code }),
  });

  return { order, isLoading };
}
