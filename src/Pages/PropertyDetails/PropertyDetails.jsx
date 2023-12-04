import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { GrFormLocation } from "react-icons/gr";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Heading from "../../components/Heading/Heading";
import ReviewSec from "./ReviewSec";
import ReviewCards from "./ReviewCards";
const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [property, setProperty] = useState({});
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    axiosSecure(`/user?email=${user?.email}`).then((res) =>
      setRole(res.data.role)
    );
  }, []);
  
  useEffect(() => {
    setLoading(true);
    axiosSecure(`/property/${id}`).then((res) => {
      setProperty(res.data);
      setLoading(false);
    });
  }, [id, axiosSecure]);

  const {
    _id,
    title,
    location,
    image,
    price,
    verification,
    agent_name,
    agent_image,
    agent_email,
    description,
  } = property || {};

  const handleAddToWishlist = () => {
    const wishlist = {
      user_email: user?.email,
      property_id: _id,
      image: image,
      title: title,
      location: location,
      agent_name: agent_name,
      agent_image: agent_image,
      agent_email: agent_email,
      verification: verification,
      price: price,
      description: description,
    };
    axiosSecure.post("/wishlist", wishlist).then((res) => {
      if (res.data.exists) {
        return toast.error("Already exist");
      }
      toast.success("Added to wishlist");
    });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mt-12  max-w-5xl mx-auto ">
      <Container>
        <div className=" rounded-lg h-[450px] overflow-hidden">
          <img className="object-cover h-full w-full" src={image} alt="" />
        </div>
        <div className="mt-12 flex flex-col justify-between text-center">
          <div>
            <div className="flex  flex-col items-center">
              <div className="flex  items-center gap-5">
                <h1 className="text-3xl">{title}</h1>
                <div className="badge badge-secondary h-fit">
                  {verification}
                </div>
              </div>
              <p className="flex items-center ">
                <GrFormLocation className="-ml-3" size={40} />
                <span>{location}</span>
              </p>
            </div>
            <h3 className="text-xl font-semibold mt-4">
              From: ${price?.start} - {price?.end}
            </h3>

            <p>{description}</p>

            {role === "Guest" ? (
              <button
                onClick={handleAddToWishlist}
                className="btn btn-neutral my-6"
              >
                Add To Wishlist
              </button>
            ) : (
              <p
                onClick={() => {
                  toast.error("For Users Only");
                }}
                className="border btn my-6"
              >
                Wishlist
              </p>
            )}
          </div>

          <div>
            {/* <h3 className="text-xl mb-4">Agent Details.</h3> */}
            <div className="flex justify-center items-center gap-3">
              <img className="h-[50px] rounded-full" src={agent_image} alt="" />
              <h4 className="font-semibold">{agent_name}</h4>
            </div>
          </div>

          <div></div>
        </div>
        <hr className="mt-12" />
        <ReviewSec property={property}/>
        

        <Heading title="Peoples Reviews" />
        <ReviewCards id={_id}/>
      </Container>
    </div>
  );
};

export default PropertyDetails;
