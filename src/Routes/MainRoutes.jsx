import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../Components/Error/Error";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
