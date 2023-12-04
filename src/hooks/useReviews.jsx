import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useReviews = (id) => {
    const axiosSecure = useAxiosSecure();
  
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => axiosSecure(`/reviews/${id}`),
  });

  return [reviews, isLoading, refetch];
};

export default useReviews;