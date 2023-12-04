

const SoldTable = ({property}) => {
    const { _id, title, status, location, offer_price, buyer_name, buyer_email } =
    property || {};
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
        
      </td>
    </tr>
    );
};

export default SoldTable;