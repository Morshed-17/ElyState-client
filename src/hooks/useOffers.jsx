import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useOffers = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
  const {
    data: offers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["offers"],
    queryFn: () => axiosSecure(`/offers?email=${user?.email}`),
  });

  return [offers, isLoading, refetch];
};

export default useOffers;