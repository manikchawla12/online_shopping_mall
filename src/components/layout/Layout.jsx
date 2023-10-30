import React, { Fragment } from "react";
import "../../App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../../pages/footer/footer";

export default function Layout({ admin }, { customer }) {
  let { pathname } = useLocation();

  console.log(!pathname.includes("/admin/"));
  console.log(!pathname.includes("/customer/"));

  return (
    <Fragment>
      <main className="App">
        {pathname !== "/missing" &&
          !pathname.includes("/admin") &&
          !pathname.includes("/customer") && <Navbar />}

        <Outlet />

        {pathname !== "/missing" &&
          !pathname.includes("/admin") &&
          !pathname.includes("/customer") && <Footer />}
      </main>
    </Fragment>
  );
}
