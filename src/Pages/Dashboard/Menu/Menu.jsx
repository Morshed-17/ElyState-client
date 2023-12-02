import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosListBox } from "react-icons/io";
import { BsBuildingCheck } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
const Menu = () => {
  return (
    <div className="mt-4">
      <ul className="menu  w-full gap-3">
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/myprofile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <CgProfile />
            My Profile
          </NavLink>
        </li>
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IoIosListBox/>
            Wishlist
          </NavLink>
        </li>
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/bought"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BsBuildingCheck/>
            Prperty Bought
          </NavLink>
        </li>
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/my-reviews"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MdReviews/>
            My Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
