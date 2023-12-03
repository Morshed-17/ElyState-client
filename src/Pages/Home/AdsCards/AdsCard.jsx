import { Link } from "react-router-dom";

const AdsCard = ({ property }) => {
    const {_id,title, location, image, price, verification} = property || {}
  return (
    <div className="card max-w-96 bg-base-100 border rounded-none">
      
      <div className="h-52">
      <img className="w-full h-full object-cover" src={image} alt="prop" />
      </div>
      
      <div className="card-body">
        <h2 className="card-title">
        {title}
          <div className="badge badge-secondary flex-1 h-fit">{verification}</div>
        </h2>
        <p>{location}</p>
        <div className="card-actions justify-between">
        
          <div className="flex font-semibold">
          <div className="">$ {price?.start}</div> - <div className="">{price?.end}</div> 
          </div>
          <Link to={`/property/${_id}`} className="btn btn-sm btn-outline">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
