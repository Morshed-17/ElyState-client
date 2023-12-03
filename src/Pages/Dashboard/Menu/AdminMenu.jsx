import { BsBuilding } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

const AdminMenu = () => {
  return (
    <div>
      <ul className="menu  w-full gap-3">
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/manage-property"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MdManageAccounts />
            Manage Property
          </NavLink>
        </li>
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/manage-users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUsersCog />
            Manage Users
          </NavLink>
        </li>
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/manage-reviews"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MdOutlineReviews />
            Manage Reviews
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default AdminMenu;
