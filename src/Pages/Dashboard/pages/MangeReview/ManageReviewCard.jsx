import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useMyReviews from "../../../../hooks/useMyReviews";
import useManageReview from "../../../../hooks/useManageReview";



const ManageReviewCard = ({review}) => {
    
    const axiosSecure = useAxiosSecure();
  const {user} = useAuth()
  const [ , , refetch] = useManageReview(user?.email)
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/reviews/${review?._id}`).then((res) => {
            refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div className="card card-compact border shadow-lg ">
      <div className="card-body">
        <div className="flex gap-3 ">
          <img
            className="avatar h-16 w-16 object-cover rounded-2xl"
            src={review.reviewer_image}
            alt="review"
          />
          <h2 className="card-title">{review?.reviewer_name}</h2>
        </div>
        <p className="font-medium text-base">Propety: {review?.title}</p>
        <p className="font-medium text-base">Agent: {review?.agent_name}</p>

        <p className=" text-base">Message: {review?.review_description}</p>
        <button onClick={handleDelete} className="btn btn-error">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageReviewCard;