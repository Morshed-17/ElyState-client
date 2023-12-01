import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    
    if(loading){
        return <div className="min-h-[calc(100vh-(76px+220px+96px))] flex items-center justify-center">
        <h2 className="text-xl font-bold mr-3">Loading</h2>
        <ClipLoader

        color={'#000000'}
        loading={loading}
        
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
        </div>
    }
    if(user){
        return children 
    }
    
    return <Navigate state={location.pathname}  to='/login' replace></Navigate>
};

export default PrivateRoute;