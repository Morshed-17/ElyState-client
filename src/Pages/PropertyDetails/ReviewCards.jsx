import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard";


const ReviewCards = ({id}) => {
    // const [reviews, setReviews] = useState([])
    const [reviews] = useReviews(id)
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6">
            {
                reviews?.data?.map(review => <ReviewCard key={review._id} review={review}/>)
            }
        </div>
    );
};

export default ReviewCards;