import { GrFormLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const AddedCard = ({property}) => {
  const {
    _id,
    title,
    location,
    image,
    price,
    verification,
    agent_name,
    agent_image,
  } = property || {};
  return (
    <div className="card max-w-96 bg-base-100 border rounded-none">
      <img src={image} alt="Shoes" />

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary flex-1 h-fit">
            {verification}
          </div>
        </h2>
        <p className="flex items-center">
          <GrFormLocation size={20} />
          <span>{location}</span>
        </p>

        <div className="card-actions justify-between">
          <div className="flex font-semibold">
            <div className="">$ {price?.start}</div> -{" "}
            <div className="">{price?.end}</div>
          </div>
          <Link to={`/property/${_id}`} className="btn btn-sm btn-outline">
            View Details
          </Link>
        </div>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center gap-3">
          <img
            className="avatar h-[40px] rounded-full"
            src={agent_image}
            alt=""
          />
          <div className="flex font-semibold">
            <p>{agent_name}</p>
          </div>
          </div>
          <div className="flex gap-3  flex-wrap">
          <button className="btn btn-sm btn-error">Delete</button>
          <Link to={`/dashboard/property/${_id}`} className="btn btn-sm btn-warning ">Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedCard;
