import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
    const navigate = useNavigate();
    const {createUser, updateUserProfile} = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        if (password.length < 6) {
          return toast.error("Password must be 6 Charecters");
        }
        const re = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/;
        if (!re.test(password)) {
          return toast.error(
            "Password must have include (A-Z) & (!@#$%^&*()_+{}[]:;<>,.?~\\-)"
          );
        }
        createUser(email, password)
          .then((res) => {
            updateUserProfile(name, photo)
              .then((res) => {
                console.log(res);
                toast.success("Account Created Successfuly");
                navigate("/");
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      };
  return (
    <div>
      <div className="hero h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card shrink-0 shadow-2xl  bg-base-100 mt-6">
          
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
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
              
              <p className="">
                 Already Have an Account?
                <Link to="/login" className="btn btn-sm btn-link mt-3">
                  
                  Login
                </Link>
              </p>
            </form>
            <GoogleLogin />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
