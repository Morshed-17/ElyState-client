import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useWishlist = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()
    const {
      data: wishlist,
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["users"],
      queryFn: () => axiosSecure(`/wishlist?email=${user?.email}`),
    });
    
    return [wishlist, isLoading, refetch];
  };
  
  export default useWishlist;
  