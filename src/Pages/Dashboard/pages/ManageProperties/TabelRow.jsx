import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TabelRow = ({ property, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    title,
    location,
    image,
    price,
    verification,
    agent_name,
    agent_email,
    agent_image,
  } = property || {};

  const handleVerify = () => {
    const status = {
      verification: "Verified",
    };
    axiosSecure.patch(`/property/${_id}`, status).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Property verified ");
      }
    });
  };
  return (
    <tr className="border-b">
      <th></th>
      <td>{title}</td>
      <td>{location}</td>
      <td>
        <p>{agent_name}</p>
        <p>{agent_email}</p>
      </td>

      <td>
        <p>${price?.start}</p>
        to
        <p>${price?.end}</p>
      </td>
      <td>
        {verification === "Verified" ? (
          <button className="btn  btn-sm btn-disabled ">Verifed</button>
        ) : (
          <button onClick={handleVerify} className="btn btn-sm btn-error">
            Verify
          </button>
        )}
        {
            verification === "Verified" && ''
        }
      </td>
    </tr>
  );
};

export default TabelRow;
