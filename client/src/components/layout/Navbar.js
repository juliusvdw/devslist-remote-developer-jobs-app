import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setContactModalShow, setPostModalShow }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top  px-0"
        style={navbarStyle}
      >
        <Link className="navbar-brand text-white" to="/" style={logoStyle}>
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
          <ul className="navbar-nav ml-auto" style={ulStyle}>
            <li className="nav-item mr-4">
              <Link className="nav-link text-white" to="/jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item dropdown mr-4">
              <a
                className="nav-link  text-white"
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
            <li className="nav-item mr-4">
              <a
                className="nav-link text-white"
                href="#"
                onClick={() => setContactModalShow(true)}
              >
                Contact
              </a>
            </li>

            <li className="nav-item mr-4">
              <a
                className="nav-link btn btn-outline-primary mt-1 nav-btn"
                href="#"
                onClick={() => setPostModalShow(true)}
                style={btnStyle}
              >
                Post Job
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const navbarStyle = {
  paddingTop: "0px",
  paddingBottom: "5px",
  backgroundColor: "white",
  borderBottom: "1px solid lightgray",
};

const ulStyle = {
  marginRight: "10%",
  paddingTop: "5px",
  paddingLeft: "10px",
  fontSize: "19px",
};

const logoStyle = {
  fontSize: "38px",
  fontWeight: "bold",
  marginLeft: "12%",
};

const btnStyle = {
  color: "white",
  fontWeight: "bold",
  width: "120px",
  paddingTop: "4px",
  border: "2px solid #ffff",
  marginLeft: "20%",
};

export default Navbar;
