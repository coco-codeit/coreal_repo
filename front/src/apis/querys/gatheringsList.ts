import { useQuery } from "@tanstack/react-query";
import { getList } from "../gatherings";

export const useGetList = () => {
  return useQuery({
    queryKey: ["lsit"],
    queryFn: () => getList(),
  });
};
