import Heading from "../../../../components/Heading/Heading";
import useAuth from "../../../../hooks/useAuth";
import useMyReviews from "../../../../hooks/useMyReviews";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user } = useAuth();
  const [reviews] = useMyReviews(user?.email)
  console.log(reviews);
  return (
    <div>
      <Heading title="My Reviews" />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6">
        {reviews?.map((review) => (
          <MyReviewCard key={review._id} review={review} />
        ))}
    
      </div>
    </div>
  );
};

export default MyReviews;
