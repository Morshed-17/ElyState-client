import { GrFormLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const GuestWishCard = ({property, refetch}) => {
    
    const { _id,title, location, image, price, verification, agent_name, agent_image } = property || {};

    const axiosSecure = useAxiosSecure()
    const handleRemove = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/wishlist/${_id}`)
                .then(res => {
                    console.log(res.data);
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been Removed.",
                        icon: "success"
                      });
                })

              
            }
          });
    }

  return (
    <div className="card max-w-96 bg-base-100 border rounded-none">
      <div className="h-52">
      <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary flex-1 h-fit">
            {verification}
          </div>
        </h2>
        <p className="flex items-center"><GrFormLocation size={20}/><span>{location}</span></p>
        
        <div className="card-actions justify-between">
          <div className="flex font-semibold">
            <div className="">$ {price?.start}</div> -{" "}
            <div className="">{price?.end}</div>
          </div>
          <Link to={`/dashboard/make-offer/${_id}`} className="btn btn-sm btn-outline ">Make An Offer</Link>
        </div>
        <div className="flex justify-between">
          <div className="justify-start items-center card-actions ">
          <img className="avatar h-[40px] rounded-full" src={agent_image} alt="" />
          <div className="flex font-semibold">
            <p>{agent_name}</p>
          </div>
          </div>
          <div>
            <button onClick={handleRemove} className="btn btn-error btn-sm text-white">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestWishCard;