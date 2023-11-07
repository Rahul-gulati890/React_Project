import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {

    const Navigate = useNavigate();
    function goToLoginData () {
        Navigate("/login");
    }
    function goToHome () {
        Navigate("/");
    }
     

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <label className="btn btn-primary disabled">
            OTG Server Maintenance
          </label>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link active" onClick={goToHome}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  Link
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item"  onClick={goToLoginData}>
                      Client Details
                      </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      Another action
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
