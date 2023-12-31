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
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import UpdateService from "../Components/UpdateService/UpdateService";
import RelatedService from "../pages/RelatedService/RelatedService";

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
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateService/:id",
        element: (
          <PrivateRoute>
            <UpdateService></UpdateService>
          </PrivateRoute>
        ),
      },
      {
        path: "/relatedService/:id",
        element: (
          <PrivateRoute>
            <RelatedService></RelatedService>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default MainRoutes;
