import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../Components/Error/Error";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import AddServices from "../pages/AddServices/AddServices";
import MySchedules from "../pages/MySchedules/MySchedules";
import MyServices from "../pages/MyServices.jsx/MyServices";
import PrivateRoute from "./PrivateRoutes";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: (
      <Root>
        <Error></Error>
      </Root>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/mySchedules",
        element: (
          <PrivateRoute>
            <MySchedules></MySchedules>
          </PrivateRoute>
        ),
      },
      {
        path: "/myServices",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default MainRoutes;
