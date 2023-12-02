import toast from "react-hot-toast";
import Heading from "../../../../components/Heading/Heading";
import { imageUpload } from "../../../../utils/utils";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {id} = useParams()
  const [property, setProperty] = useState({})

  useEffect(() => {
    axiosSecure(`/property/${id}`)
    .then(res => setProperty(res.data))
  }, [axiosSecure, id])
  
  const { _id,title,description, location, image, price, verification, agent_name, agent_image } = property || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const image = form.image.files[0];
    const location = form.location.value;
    const description = form.description.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;
    console.log(title, location, minPrice, maxPrice, description, image);
    // upload image
    const imageData = await imageUpload(image);
    console.log(imageData);

    const updatedProperty = {
      title: title,
      location: location,
      image: imageData?.data?.display_url,
      description: description,
      price: {
        start: parseFloat(minPrice),
        end: parseFloat(maxPrice),
      },
    };
    axiosSecure.put(`/property/${_id}`, updatedProperty).then((res) => {
      toast.success("Property Updated successfully");
    });
  };
  return (
    <div>
      <Heading title="Update Property" />

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
                    defaultValue={title}
                    placeholder="Title"
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
                    defaultValue={location}
                    name="location"
                    placeholder="Location"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Property Image</span>
                  </label>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Property Description</span>
                  </label>
                  <textarea
                    name="description"
                    defaultValue={description}
                    className="input input-bordered h-fit"
                    required
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Agent Name</span>
                    </label>
                    <input
                      name="agentName"
                      type="text"

                      defaultValue={user?.email}
                      className="input input-bordered"
                      disabled
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Agent Email</span>
                    </label>
                    <input
                      name="agentEmail"
                      type="text"
                      defaultValue={user?.displayName}
                      disabled
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Min Price</span>
                    </label>
                    <input
                      name="minPrice"
                      type="number"
                      defaultValue={price?.start}
                      placeholder="number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Max Price</span>
                    </label>
                    <input
                      name="maxPrice"
                      type="number"
                      defaultValue={price?.end}
                      placeholder="number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
