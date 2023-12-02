import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import AllProperties from "../Pages/AllProperties/AllProperties";
import PrivateRoute from "./PrivateRoute";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import MyProfile from "../Pages/Dashboard/pages/MyProfile/MyProfile";
import AddProperty from "../Pages/Dashboard/pages/AddProperty/AddProperty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-properties",
        element: (
          <PrivateRoute>
            <AllProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "property/:id",
        element: <PropertyDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'my-profile',
        element: <MyProfile/>
      },
      {
        path: 'add-property',
        element: <AddProperty/>
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

export default router;
