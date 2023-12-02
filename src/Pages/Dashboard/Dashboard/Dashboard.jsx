import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";
import Logo from "../../../shared/Logo/Logo";
import Menu from "../Menu/Menu";
import { FaHome } from "react-icons/fa";
const Dashboard = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 h-screen">
        <div className="bg-gray-200 col-span-12 md:col-span-3 py-12 flex flex-col justify-between px-4">
          <div>
            <Logo />
            <Menu />
          </div>
          <Link to='/' className="btn"><FaHome/> Go back Home</Link>
        </div>
        <div className="bg-green-50 col-span-12 md:col-span-9"></div>
      </div>
    </Container>
  );
};

export default Dashboard;
