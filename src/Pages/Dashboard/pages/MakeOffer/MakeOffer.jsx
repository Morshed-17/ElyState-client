import { useEffect, useState } from "react";
import Heading from "../../../../components/Heading/Heading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";
import toast from "react-hot-toast";

const MakeOffer = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [wishlist, setWishlist] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    axiosSecure(`/wishlist/${id}`).then((res) => {
      setLoading(false);
      setWishlist(res.data);
    });
  }, []);

  const {
    _id,
    title,
    location,
    image,
    price,
    verification,
    agent_name,
    description,
    agent_image,
  } = wishlist || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const offerPrice = form.offerPrice.value
    const offer = {
      title: title,
      image: image,
      location: location,
      buyer_email: user?.email,
      buyer_name: user?.displayName,
      offer_price: offerPrice,
      status: "Pending"

    };
    axiosSecure.post("/offers", offer)
    .then(res => {
        console.log(res.data);
        toast.success("Offer Successfuly sent")
    })
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Heading title="Make an offer" />
      <div>
        <div className="hero ">
          <div className="hero-content flex-col ">
            <div className="card shrink-0 shadow-2xl  bg-base-100 mt-6">
              <form onSubmit={handleSubmit} className="card-body  max-w-7xl">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    defaultValue={title}
                    disabled
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Property Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="input input-bordered"
                    defaultValue={location}
                    disabled
                    required
                  />
                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Property Description</span>
                  </label>
                  <textarea
                    rows={7}
                    disabled
                    name="description"
                    className="input input-bordered h-fit"
                    defaultValue={description}
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Buyer Name</span>
                    </label>
                    <input
                      name="agentName"
                      type="text"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                      disabled
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Buyer Email</span>
                    </label>
                    <input
                      name="agentEmail"
                      type="text"
                      defaultValue={user?.email}
                      disabled
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">
                      Make Offer Between ${price?.start} - ${price?.end}
                    </span>
                  </label>
                  <input
                    name="offerPrice"
                    type="number"
                    placeholder="Write your offer."
                    min={price?.start}
                    max={price?.max}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send Offer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeOffer;
