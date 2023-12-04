import Heading from "../../../../components/Heading/Heading";
import Loading from "../../../../components/Loading/Loading";
import useUsers from "../../../../hooks/userUsers";
import UserTable from "./UserTable";


const ManageUsers = () => {
    const [users, isLoading, refetch] = useUsers()
    
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
      <Heading title="Manage Users" />

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Agent</th>
                <th>Mark as fraud</th>
                <th>Delete user</th>
              </tr>
            </thead>
            <tbody>
                {
                    users?.data.map(user => <UserTable key={user._id} user={user} refetch={refetch}/>)
                }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageUsers;