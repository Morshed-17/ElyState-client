import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const GoogleLogin = () => {
    const navigate = useNavigate();
    const {signInWithGoogle} = useAuth()
    const axiosSecure = useAxiosSecure()
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then((res) => {
            console.log(res);
            const user = {
                name: res.user.displayName,
                email: res.user.email,
                role: 'Guest'
              }
              axiosSecure.put(`users/${res.user.email}` , user)
                .then(res => console.log(res.data))
                
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