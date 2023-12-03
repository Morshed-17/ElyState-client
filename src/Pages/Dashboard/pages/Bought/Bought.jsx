import { useEffect } from "react";
import Heading from "../../../../components/Heading/Heading";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useOffers from "../../../../hooks/useOffers";
import GuestWishCard from "../GuestWishlist/GuestWishCard";
import BoughtCard from "./BoughtCard";


const Bought = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const [offers, isLoading, refetch] = useOffers()
    console.log(offers?.data);
    return (
        <div>
            <Heading title="Bought Properties"/>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-6">
            {offers?.data.map(property => <BoughtCard key={property.title} property={property} refetch={refetch}></BoughtCard>)}
        </div>

        </div>
    );
};

export default Bought;