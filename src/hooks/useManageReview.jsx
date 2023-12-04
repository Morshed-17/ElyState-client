import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useManageReview = () => {
    const axiosSecure = useAxiosSecure();
  const {
    data: reviews,
    isLoading: loading,
    refetch: refetchReview,
  } = useQuery({
    queryKey: ["Manage review"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews`);
      return res.data;
    },
  });

  return [reviews, loading, refetchReview];
};

export default useManageReview;