import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div>
            <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
    );
};

export default Logo;