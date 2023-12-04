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
import AddedProperties from "../Pages/Dashboard/pages/AddedProperties/AddedProperties";
import UpdateProperty from "../Pages/Dashboard/pages/UpdateProperty/UpdateProperty";
import ManageProperties from "../Pages/Dashboard/pages/ManageProperties/ManageProperties";
import ManageUsers from "../Pages/Dashboard/pages/ManageUsers/ManageUsers";
import Wishlist from "../Pages/Dashboard/pages/GuestWishlist/GuestWishlist";
import GuestWishlist from "../Pages/Dashboard/pages/GuestWishlist/GuestWishlist";
import MakeOffer from "../Pages/Dashboard/pages/MakeOffer/MakeOffer";
import Bought from "../Pages/Dashboard/pages/Bought/Bought";
import RecProperties from "../Pages/Dashboard/pages/RecProperties/RecProperties";
import PayNow from "../Pages/Dashboard/pages/Bought/PayNow";
import SoldProperties from "../Pages/Dashboard/pages/SoldPropeties/SoldProperties";

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
        path: "/dashboard",
        element: <h1>Hello Navigate through the menu to see content !</h1>,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <PrivateRoute>
            <GuestWishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "make-offer/:id",
        element: (
          <PrivateRoute>
            <MakeOffer />
          </PrivateRoute>
        ),
      },
      {
        path: "bought",
        element: (
          <PrivateRoute>
            <Bought />
          </PrivateRoute>
        ),
      },
      {
        path: "pay-now/:id",
        element: (
          <PrivateRoute>
            <PayNow />
          </PrivateRoute>
        ),
      },
      {
        path: "add-property",
        element: (
          <PrivateRoute>
            <AddProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "added-properties",
        element: (
          <PrivateRoute>
            <AddedProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "rec-properties",
        element: (
          <PrivateRoute>
            <RecProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "sold-properties",
        element: (
          <PrivateRoute>
            <SoldProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "property/:id",
        element: (
          <PrivateRoute>
            <UpdateProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-property",
        element: (
          <PrivateRoute>
            <ManageProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
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
