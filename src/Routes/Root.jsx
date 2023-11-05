/* eslint-disable react/prop-types */
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
