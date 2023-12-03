import { useEffect, useState } from "react";
import Heading from "../../../../components/Heading/Heading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";


const MakeOffer = () => {
    const {id} = useParams()
    const axiosSecure = useAxiosSecure()
    const [wishlist, setWishlist] = useState({})
    useEffect(() => {
        axiosSecure(`/wishlist/${id}`)
        .then(res => {
            console.log(res.data)
        })
    }, [])
    return (
        <div>
            <Heading title="Make an offer"/>
            


        </div>
    );
};

export default MakeOffer;