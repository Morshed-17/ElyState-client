import toast from "react-hot-toast";

const TabelRow = ({ property }) => {
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
    
    toast.success("Property verified ")
  }
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
        {
            verification === "Verified"? 
            <button className="btn  btn-sm btn-disabled ">Verifed</button>
            :
            <button onClick={handleVerify} className="btn btn-sm btn-error">Verify</button>
        }
        <button className="btn btn-sm btn-warning mt-2">Reject</button>
      </td>
    </tr>
  );
};

export default TabelRow;
