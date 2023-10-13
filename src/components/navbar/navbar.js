import { Fragment } from "react";
import "./navbar.css";

function Navbar() {
  return (
    <Fragment>
        <div className="py-2 border-bottom">
        <div className="container ">
            <div className="row  d-flex">
                <div className="col-md-6 mt-2">
                <i className="fa fa-phone me-2" aria-hidden="true"></i>
                <span >123-582-987</span>
                </div>
                <div className="col-md-6 d-flex  flex-row-reverse">
                    <div>
                        <ul className=" list-group list-group-horizontal ">
                            <li className="list-group-item border-0">
                                <a href="*" className="text-decoration-none text-dark">
                                <i className="fa fa-male me-2"></i>
                                <span>Login</span>
                                </a>
                            </li>
                            <li className="list-group-item border-0">
                            <a href="*" className="text-decoration-none text-dark">
                                <i className="fa fa-male me-2"></i>
                                <span>Register</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="border-bottom">
            <div className="container ">
      <nav className="navbar navbar-expand-lg navbar-light" >
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#"><h2>OSM</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex  flex-row-reverse"  id="navbarNav">
      <ul className="navbar-nav me-2">
        <li className="nav-item">
          <a className="nav-link hover-effect" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link hover-effect" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link hover-effect" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link hover-effect" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link hover-effect " href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
</div>

</div>
    </Fragment>
  );
}

export default Navbar;
