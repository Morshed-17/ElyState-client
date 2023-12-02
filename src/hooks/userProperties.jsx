import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useProperties = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: properties,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: () => axiosSecure(`/properties`),
  });

  return [properties, isLoading, refetch];
};

export default useProperties;
