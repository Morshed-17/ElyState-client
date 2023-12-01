const AdsCard = ({ property }) => {
    const {title, location, image, price, verification} = property || {}
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
        {title}
          <div className="badge badge-secondary flex-1 h-fit">{verification}</div>
        </h2>
        <p>{location}</p>
        <div className="card-actions justify-between">
        
          <div className="flex">
          <div className="">$ {price?.start}</div> - <div className="">{price?.end}</div> 
          </div>
          <button className="btn btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
