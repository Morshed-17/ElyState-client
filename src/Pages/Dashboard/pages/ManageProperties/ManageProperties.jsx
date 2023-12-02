import Heading from "../../../../components/Heading/Heading";
import Loading from "../../../../components/Loading/Loading";
import useProperties from "../../../../hooks/userProperties";
import TabelRow from "./TabelRow";

const ManageProperties = () => {
  const [properties, isLoading, refetch] = useProperties();

  if(isLoading){
    return <Loading/>
  }
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
                    properties?.data.map(property => <TabelRow key={property._id} property={property} refetch={refetch}/>)
                }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProperties;
