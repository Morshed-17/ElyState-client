import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import AllProperties from "../Pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <Error/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: 'all-properties',
          element: <PrivateRoute><AllProperties/></PrivateRoute>,
          loader: () => fetch('properties.json')
        }
        
      ]
    },
    {
      path: 'login',
      element: <Login/>
    },
    {
      path: 'signup',
      element: <SignUp/>
    }
  ]);

  export default router