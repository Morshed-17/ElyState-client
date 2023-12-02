import { BsBuilding } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { MdAddHomeWork } from "react-icons/md";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaHouseCircleCheck } from "react-icons/fa6";
const AgentMenu = () => {
  return (
    <div>
      <ul className="menu  w-full gap-3">
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/add-property"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <MdAddHomeWork />
            Add Property
          </NavLink>
        </li>
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/added-properties"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaBuildingCircleCheck />
            Added Properties
          </NavLink>
        </li>
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/sold-properties"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHouseCircleCheck />
            Sold Properties
          </NavLink>
        </li>
        <li className="bg-white rounded-lg text-lg font-semibold">
          <NavLink
            to="/dashboard/rec-properties"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BiSolidOffer />
            Requested properties
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AgentMenu;
