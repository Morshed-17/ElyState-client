import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useReviews from "../../hooks/useReviews";

const ReviewSec = ({ property }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  const [role, setRole] = useState(null);
  useEffect(() => {
    setLoading(true);
    axiosSecure(`/user?email=${user?.email}`).then((res) => {
      setRole(res.data.role);
      setLoading(false);
    });
  }, []);
  const { _id, title, agent_name } = property || {};
  const [, , refetch] = useReviews(_id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = {
      property_id: _id,
      title: title,
      agent_name: agent_name,
      reviewer_name: user?.displayName,
      reviewer_email: user?.email,
      reviewer_image: user?.photoURL,
      review_description: form.review.value,
    };

    axiosSecure.post("/reviews", review).then((res) => {
      console.log(res.data);
      refetch()
      toast.success("Review Submitted");
      form.reset();
    });
  };
  return (
    <form onSubmit={handleSubmit} className=" mt-12">
      <h3 className="text-xl font-bold">Write a review now</h3>
      <textarea
        rows={6}
        name="review"
        required
        className="w-full border p-4 my-6"
        placeholder="Write Your Thoughts About This Property"
      />
      {role === "Guest" ? (
        <button className="btn btn-secondary">Submit</button>
      ) : (
        <p
          onClick={() => {
            toast.error("Only Users Can review");
          }}
          className="btn btn-secondary"
        >
          Submit
        </p>
      )}
    </form>
  );
};

export default ReviewSec;
