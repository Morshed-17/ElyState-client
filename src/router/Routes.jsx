import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";


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