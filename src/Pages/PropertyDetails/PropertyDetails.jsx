import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import { GrFormLocation } from "react-icons/gr";


const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperty(data.find((property) => property._id == id)));
  }, [id]);

  const {
    _id,
    title,
    location,
    image,
    price,
    verification,
    agent_name,
    agent_image,
    description,
  } = property || {};

  return (
    <div className="mt-12  max-w-5xl mx-auto ">
      <Container>
        <div className=" rounded-lg h-[450px] overflow-hidden">
          <img className="object-cover h-full w-full" src={image} alt="" />
        </div>
        <div className="mt-12 flex flex-col justify-between">
          <div>
            <div className="flex justify-start items-center gap-5">
              <h1 className="text-3xl">{title} </h1>
              <div className="badge badge-secondary h-fit">{verification}</div>
            </div>
            <p className="flex items-center">
              <GrFormLocation className="-ml-3" size={40} />
              <span>{location}</span>
            </p>
            <h3 className="text-xl font-semibold mt-4">
              From: ${price?.start} - {price?.end}
            </h3>

            <p>{description}</p>
            <button className="btn btn-neutral my-6">Add To Wishlist</button>
          </div>

          <div>
            {/* <h3 className="text-xl mb-4">Agent Details.</h3> */}
            <div className="flex items-center gap-3">
              <img className="h-[50px] rounded-full" src={agent_image} alt="" />
              <h4 className="font-semibold">{agent_name}</h4>
            </div>
          </div>


          <div></div>
        </div>
        
      </Container>
    </div>
  );
};

export default PropertyDetails;
