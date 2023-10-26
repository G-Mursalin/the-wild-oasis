import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../services/apiCabins";
import { useSearchParams } from "react-router-dom";

export function useCabins() {
  const [searchParams] = useSearchParams();

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isPending: isLoading,
    data: { data: cabins, count } = {},
    error,
  } = useQuery({
    queryKey: ["cabins", page],
    queryFn: () => getCabins({ page }),
  });

  return { isLoading, error, cabins, count };
}
