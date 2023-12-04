import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useOffers from "../../../../hooks/useOffers";

const PayNow = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [offer, setOffer] = useState({});
  const [, , refetch] = useOffers();
  useEffect(() => {
    axiosPublic.get(`/offer/${id}`).then((res) => setOffer(res.data));
  }, []);
  const { title, location, image, agent_name, offer_price, status, _id } =
    offer || {};
  const handlePay = (e) => {
    e.preventDefault();
    const form = e.target;
    const status = {
      status: "Payed",
    };
    axiosSecure.patch(`/offer/${id}`, status).then((res) => {
        console.log(res.data);
      refetch();
      toast.success("Payment Successfull");
      form.reset();
    });
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="  w-full space-y-9">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 ">
                <div className="flex flex-col justify-start items-start w-full space-y-4">
                  <p className="text-xl md:text-2xl leading-normal text-gray-800">
                    {title}
                  </p>
                  <p className="text-base font-semibold leading-none text-gray-600">
                    ${offer_price}
                  </p>
                </div>
                <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                  <img src={image} alt="headphones" />
                </div>
              </div>
              <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                <label className="mt-8 text-base leading-4 text-gray-800">
                  Card details
                </label>
                <form onSubmit={handlePay} className="mt-2 flex-col">
                  <div>
                    <input
                      className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      required
                      placeholder="0000 1234 6549 15151"
                    />
                  </div>
                  <div className="flex-row flex">
                    <input
                      className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      required
                      placeholder="MM/YY"
                    />
                    <input
                      className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                      required
                      placeholder="CVC"
                    />
                  </div>
                  {
                    status === "Payed" ? 
                    <p className="mt-8 border border-transparent  bg-gray-900 text-white flex justify-center items-center py-4 rounded w-full">
                    <div>
                      <span className="text-base leading-4">
                        Payed
                      </span>
                    </div>
                  </p>
                  :
                  <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                    <div>
                      <p className="text-base leading-4">
                        Pay ${offer_price}
                      </p>
                    </div>
                  </button>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNow;
