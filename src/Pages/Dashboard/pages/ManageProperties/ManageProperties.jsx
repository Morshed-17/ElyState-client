import Heading from "../../../../components/Heading/Heading";
import useProperties from "../../../../hooks/userProperties";
import TabelRow from "./TabelRow";

const ManageProperties = () => {
  const [properties, isLoading, refetch] = useProperties();

  return (
    <div>
      <Heading title="Manage Properties" />

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Location</th>
                <th>Agent</th>
                <th>price</th>
                <th>Verfy Status</th>
              </tr>
            </thead>
            <tbody>
                {
                    properties?.data.map(property => <TabelRow key={property._id} property={property}/>)
                }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProperties;
