import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = ({ id }) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery(["reviews", id], async () => {
    try {
      const response = await axiosPublic.get(`/reviews/${id}`);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching reviews");
    }
  });

  return [reviews, isLoading, refetch];
};

export default useReviews;
