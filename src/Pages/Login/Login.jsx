import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <div className="card shrink- shadow-2xl bg-base-100 mt-6">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>Already Have an Account? <Link to='/signup' className="btn btn-sm btn-link mt-3"> Sign Up</Link></p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
