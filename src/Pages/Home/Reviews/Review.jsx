const Review = ({ review }) => {
  return (
    <div className="card card-compact text-center py-4">
      <div className="card-body ">
        <div className="flex gap-3 justify-center ">
          <img
            className="avatar h-16 w-16 object-cover rounded-2xl"
            src={review.reviewer_image}
            alt="review"
          />
          <h2 className="card-title">{review?.reviewer_name}</h2>
        </div>
        <p className="font-medium text-base">Propety: {review?.title}</p>
        <p className=" text-base">Message: {review?.review_description}</p>
      </div>
    </div>
  );
};

export default Review;
