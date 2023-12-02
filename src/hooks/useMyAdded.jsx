import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useMyAdded = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: properties, isLoading, refetch} = useQuery({
        queryKey: ['properties'],
        queryFn: () => axiosSecure(`/properties?email=${user?.email}`)
      })

    return [properties, isLoading, refetch]
};

export default useMyAdded;