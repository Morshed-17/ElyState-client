

const RecTable = ({property, refetch}) => {
    console.log(property);
    const {_id, title,status,location, offer_price, buyer_name, buyer_email} = property || {}

    return (
        <tr className="border-b">
      <th></th>
      <td>{title}</td>
      <td>{location}</td>
      <td>
        {buyer_email}
      </td>

      <td>
        {buyer_name}
      </td>
      <td>
        $ {offer_price}
      </td>
      <td>
        <p>{status}</p>
        {
            status === "Pending" && 
            <div className="flex gap-2">
            <button className="btn btn-warning btn-sm">Accept</button>
            <button className="btn btn-sm btn-error ">Reject</button>
            </div>
        }
      </td>
    </tr>
    );
};

export default RecTable;