import React from "react";
import Routers from "../../Router/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
