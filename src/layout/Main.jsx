import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
