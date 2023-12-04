import { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import GuestMenu from "./GuestMenu";
import AgentMenu from "./AgentMenu";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Menu = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  useEffect(() => {
    setLoading(true);
    axiosSecure(`/user?email=${user?.email}`).then((res) => {
      setRole(res.data.role);
      setLoading(false);
    });
  }, []);
  return (
    <div className="mt-4">
      <h3 className="text-xl mb-4 font-semibold">Role: {role && role}</h3>
      <ul className="menu  w-full gap-3">
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/my-profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <CgProfile />
            My Profile
          </NavLink>
        </li>
      </ul>
      {role === "Guest" && <GuestMenu />}
      {role === "Agent" && <AgentMenu />}
      {role === "Admin" && <AdminMenu />}
    </div>
  );
};

export default Menu;
