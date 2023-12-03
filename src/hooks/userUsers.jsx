import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["users"],
      queryFn: () => axiosSecure(`/users`),
    });
  
    return [users, isLoading, refetch];
  };
  
  export default useUsers;
  