import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-(76px+220px+96px))]">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
