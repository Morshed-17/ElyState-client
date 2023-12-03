import { GrFormLocation } from "react-icons/gr";


const BoughtCard = ({property, refetch}) => {
    const {title, location, image, agent_name, offer_price, status } = property || {}

    return (
        <div className="card max-w-96 bg-base-100 border rounded-none">
      <div className="h-52">
      <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          
        </h2>
        <p className="flex items-center"><GrFormLocation size={20}/><span>{location}</span></p>
        
        <div className="card-actions justify-between">
          <div className="flex font-semibold">
            <div className="">Offered $ {offer_price}</div>
            
          </div>
          {/* pay btn */}
        </div>
        <div className="flex justify-between">
          <div className="justify-start items-center card-actions ">
          <div className="flex font-semibold">
            <p>Agent: {agent_name}</p>
          </div>
          </div>
          <div>
            <button  className="btn btn-error btn-sm text-white">{status}</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default BoughtCard;