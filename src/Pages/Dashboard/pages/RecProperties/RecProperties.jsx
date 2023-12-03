import Heading from "../../../../components/Heading/Heading";
import Loading from "../../../../components/Loading/Loading";
import useRecProp from "../../../../hooks/useRecProp";
import TabelRow from "../ManageProperties/TabelRow";
import RecTable from "./recTable";

const RecProperties = () => {
  const [properties, isLoading, refetch] = useRecProp();

  if(isLoading){
    return <Loading/>
  }
  return (
    <div>
      <Heading title="Offered Properties" />

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Location</th>
                <th>Buyer Email</th>
                <th>Buyer Name</th>
                <th>Offered Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {properties?.data.map((property) => (
                <RecTable
                  key={property?._id}
                  property={property}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecProperties;
