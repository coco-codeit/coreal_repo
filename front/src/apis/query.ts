import { useQuery } from "@tanstack/react-query";
import { getList } from "./apis";

export const useGetList = () => {
  return useQuery({
    queryKey: ["lsit"],
    queryFn: () => getList(),
  });
};
