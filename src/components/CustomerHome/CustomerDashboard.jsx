import React from "react";
import { Link, Outlet } from "react-router-dom";
import './customerDashboard.css'
export default function CustomerDashboard() {

    return (
      <>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div
              className="col-auto col-md-3 col-xl-2 px-sm-2 px-0"
              style={{ backgroundColor: "rgb(22, 22, 27)", width: '18% !important'}}
            >
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link
                  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none mt-2"
                >
                  <span className="fs-4 d-none d-sm-inline">Menu</span>
                </Link>
                <ul
                  className="w-100 nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                  style={{paddingLeft: '1rem'}}
                >
                  <li className="nav-item text-start navHover">
                    <Link to="/customer" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-light  ">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className=" text-start navHover ">
                    <Link
                      to="/customer/customerProfile"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-light  ">
                        Profile
                      </span>{" "}
                    </Link>
                      </li>
                      <li className=" text-start navHover ">
                    <Link
                      to="/product"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-light  ">
                       Products
                      </span>{" "}
                    </Link>
                      </li>
                      <li className=" text-start navHover ">
                    <Link
                      to="/admin/orders"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-light  ">
                       Orders
                      </span>{" "}
                    </Link>
                      </li>
                  <li className="navHover text-start  ">
                    <Link to="/admin/customers" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-people"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline text-light  ">
                        Customers
                      </span>
                    </Link>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <div className="col p-0" style={{backgroundColor: 'rgb(228, 228, 228)'}}>
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" style={{fontWeight: '500'}} to="/customer/">Customer Dashboard</Link>
                <Link className="link text-dark">Logout</Link>
              </div>
            </nav>
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  
