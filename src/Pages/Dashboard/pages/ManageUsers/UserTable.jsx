import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UserTable = ({ user, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleMakeAdmin = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin",
    }).then((result) => {
      if (result.isConfirmed) {
        const role = { role: "Admin" };
        axiosSecure.patch(`/users/${user?.email}`, role).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "User Role Updated!",
            icon: "success",
          });
        });
      }
    });
  };
  const handleMakeAgent = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Agent",
    }).then((result) => {
      if (result.isConfirmed) {
        const role = { role: "Agent" };
        axiosSecure.patch(`/users/${user?.email}`, role).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "User Role Updated!",
            icon: "success",
          });
        });
      }
    });
  };
  const handleMarkFraud = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make fraud",
    }).then((result) => {
      if (result.isConfirmed) {
        const role = { role: "Fraud" };
        axiosSecure.patch(`/users/${user?.email}`, role).then((res) => {
          console.log(res.data);
          axiosSecure.delete(`/properties?email=${user?.email}`)
          .then(res => {
            refetch();
            Swal.fire({
              title: "User Role Updated!",
              icon: "success",
            });
          })


         
        });
      }
    });
  };
   
  const handleDelete = () => {
    Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          const role = { role: "Fraud" };
          axiosSecure.delete(`/user/${user?._id}`, role).then((res) => {
            console.log(res.data);
            refetch();
            Swal.fire({
              title: "User Deleted!",
              icon: "success",
            });
          });
        }
      });
  }

  return (
    <tr className="border-b">
      <th className=""></th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        {user?.role === "Admin" ? (
          <p className="font-semibold text-center">Currently Admin</p>
        ) : (
          <button onClick={handleMakeAdmin} className="btn btn-sm btn-warning">
            Make Admin
          </button>
        )}
      </td>

      <td>
        {user?.role === "Agent" ? (
          <p className="font-semibold text-center">Currently Agent</p>
        ) : (
          <button onClick={handleMakeAgent} className="btn btn-sm btn-primary">
            Make Agent
          </button>
        )}
      </td>
      <td>
        {user?.role === "Fraud" ? (
          <p className="font-semibold text-center">Currently Fraud</p>
        ) : (
          <button onClick={handleMarkFraud} className="btn btn-sm btn-error">
            Mark Fraud
          </button>
        )}
      </td>
      <td>
        <button onClick={handleDelete} className="btn btn-sm btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default UserTable;
