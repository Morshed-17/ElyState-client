import useManageReview from "../../../../hooks/useManageReview";
import MyReviewCard from "../MyReviews/MyReviewCard";
import ManageReviewCard from "./ManageReviewCard";


const ManageReview = () => {
    const [reviews, isLoading, refetch] = useManageReview()
     console.log(reviews);
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6">
        {reviews?.map((review) => (
          <ManageReviewCard key={review._id} review={review} />
        ))}
    
      </div>
        </div>
    );
};

export default ManageReview;