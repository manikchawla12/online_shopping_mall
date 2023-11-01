import { Fragment, useContext, useEffect, useState } from "react";
import "./customerProfile.css";
import APIServices from "../../../API/APIServices";
import { AuthContext } from "../../../context/AuthContext";

export const CustomerProfile = () => {
  const { authUser, setAuthUser } = useContext(AuthContext)

console.log(authUser)
    
  return (
    <Fragment>
      <div className="container text-center mt-5 w-50 border border-warning bg-success">
        <table className="table bg-success text-dark table-striped ">
          <tbody>
            <tr>
              <th>ID</th>
              <td className="fw-bold">{authUser.id}</td>
            </tr>
            <tr>
              <th>UserName</th>
              <td className="fw-bold">{authUser.userName}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td className="fw-bold">{authUser.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td className="fw-bold">{authUser.email}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td className="fw-bold">{authUser.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};
