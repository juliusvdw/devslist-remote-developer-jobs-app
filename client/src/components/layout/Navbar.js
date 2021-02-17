import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setContactModalShow, setPostModalShow }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top  px-0"
        style={navbarStyle}
      >
        <Link className="navbar-brand text-dark" to="/" style={logoStyle}>
          devslist
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto" style={ulStyle}>
            <li className="nav-item mr-4">
              <Link className="nav-link text-dark" to="/jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item dropdown mr-4">
              <a
                className="nav-link  text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="#"
              >
                Join
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Slack community
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="#"
                onClick={() => setContactModalShow(true)}
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            className="nav-link btn btn-outline-primary mt-1 nav-btn ml-auto"
            href="#"
            onClick={() => setPostModalShow(true)}
            style={btnStyle}
          >
            Post Job
          </a>
        </div>
      </nav>
    </div>
  );
};

const navbarStyle = {
  paddingTop: "7px",
  paddingBottom: "7px",
  backgroundColor: "white",
  borderBottom: "1px solid lightgray",
};

const ulStyle = {
  marginLeft: "5%",
  paddingTop: "5px",
  paddingLeft: "10px",
  fontSize: "16px",
};

const logoStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginLeft: "5%",
};

const btnStyle = {
  marginRight: "70px",
  borderWidth: "1.5px",
  fontWeight: "bold",
};

export default Navbar;
