import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
const GoogleLogin = () => {
    const {signInWithGoogle} = useAuth()
    return (
        <button className="btn">
            <FcGoogle></FcGoogle>
            Sign In
        </button>
    );
};

export default GoogleLogin;