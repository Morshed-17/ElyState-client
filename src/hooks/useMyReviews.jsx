import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const useMyReviews = (email) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: reviews,
    isLoading: loading,
    refetch: refetchReview,
  } = useQuery({
    queryKey: ["my reviews"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-reviews/${email}`);
      return res.data;
    },
  });

  return [reviews, loading, refetchReview];
};

export default useMyReviews;
