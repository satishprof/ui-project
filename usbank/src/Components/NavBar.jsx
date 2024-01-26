import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   sessionStorage.removeItem("loggedin-user");
  //   navigate("/");
  // };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed shadow">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarTogglerDemo01"
            // aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand">Logo</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  UI-Bank Loan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
