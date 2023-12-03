import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRecProp = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
  const {
    data: properties,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: () => axiosSecure(`/offer?email=${user?.email}`),
  });

  return [properties, isLoading, refetch];
};

export default useRecProp;