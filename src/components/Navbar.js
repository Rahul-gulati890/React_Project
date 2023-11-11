import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  function goToLoginData() {
    Navigate("/login");
  }
  function goToHome() {
    Navigate("/");
  }

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        style={{ backgroundColor: "#22c6f0" }}
      >
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href={() => false}>
              <img
                src={require("./Logo.png")}
                height={15}
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href={() => false}>
                  eCIFM Solutions Inc
                </a>
              </li>
              <button className="nav-link active" onClick={goToHome}>
                Home
              </button>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" onClick={goToLoginData}>
                      Client Details
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">Another action</button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Icon */}
            <a className="link-secondary me-3" href={() => false}>
              <i className="fas fa-shopping-cart" />
            </a>
            {/* Notifications */}
            <div className="dropdown">
              <a
                className="link-secondary me-3 dropdown-toggle hidden-arrow"
                href={() => false}
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell" />
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href={() => false}>
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={() => false}>
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={() => false}>
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
