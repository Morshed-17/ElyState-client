import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDetails = ({id}) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: property,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["property"],
    queryFn: () => axiosSecure(`/property/${id}`),
    
  });

  return [property, isLoading, refetch];
};

export default useDetails;
