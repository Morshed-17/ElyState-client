import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
    const navigate = useNavigate();
    const {signInWithGoogle} = useAuth()
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then((res) => {
            console.log(res);
            toast.success("Account Logged In successfuly");
            navigate("/");
          })
          .catch((err) => console.log(err));
    
    }
    return (
        <button onClick={handleGoogleLogin} className="btn">
            <FcGoogle></FcGoogle>
            Sign In
        </button>
    );
};

export default GoogleLogin;