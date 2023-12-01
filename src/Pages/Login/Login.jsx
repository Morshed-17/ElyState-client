import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const {signIn} = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log( email, password);
        
        signIn(email, password)
          .then((res) => { 
            console.log(res);
            navigate('/')
            toast.success("Logged in Successfully")
          })
          .catch((err) => {
            console.log(err)
            toast.error("Invalid Credentials")
          });
      };

  return (
    <div>
      <div className="hero h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card shrink- shadow-2xl bg-base-100 mt-6">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                    name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Don't Have an account? <Link to='/signup' className="btn btn-sm btn-link mt-3"> Sign Up</Link></p>
            </form>
            <GoogleLogin/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
