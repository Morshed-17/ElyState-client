import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RecTable = ({ property, refetch }) => {
  console.log(property);
  const axiosSecure = useAxiosSecure();
  const { _id, title, status, location, offer_price, buyer_name, buyer_email } =
    property || {};
  const handleAccept = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const status = {
          status: "Accepted",
        };
        axiosSecure.patch(`/offer/${_id}`, status).then((res) => {
          refetch();
          console.log(res.data);
          toast.success("Offer Accepted");
          Swal.fire({
            title: "Deleted!",
            text: "Offer Accepted",
            icon: "success",
          });
        });
      }
    });
  };
  const handleReject = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const status = {
          status: "Rejected",
        };
        axiosSecure.patch(`/offer/${_id}`, status).then((res) => {
          refetch();
          console.log(res.data);
          toast.success("Offer Rejected");
          Swal.fire({
            title: "Deleted!",
            text: "Offer Accepted",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <tr className="border-b">
      <th></th>
      <td>{title}</td>
      <td>{location}</td>
      <td>{buyer_email}</td>

      <td>{buyer_name}</td>
      <td>$ {offer_price}</td>
      <td>
        <p className="font-medium">{status}</p>
        {status === "Pending" && (
          <div className="flex gap-2">
            <button onClick={handleAccept} className="btn btn-warning btn-sm">
              Accept
            </button>
            <button onClick={handleReject} className="btn btn-sm btn-error ">
              Reject
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default RecTable;
