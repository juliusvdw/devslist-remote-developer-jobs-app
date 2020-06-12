import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import JobContext from "../../context/jobs/jobContext";

const Footer = (props) => {
  //pull whats needed from props
  const { setContactModalShow } = props;

  const jobContext = useContext(JobContext);

  const { getSearchJobs } = jobContext;
  return (
    <Fragment>
      <div className="footer" style={footerStyle}>
        <hr
          style={{
            marginBottom: "60px",
            width: "85%",
            backgroundColor: "#9B9B9B",
          }}
          className="mx-auto"
        />
        <div className="row mx-auto">
          <div className="col-lg-8 mx-auto text-center">
            <div className="row">
              <div
                className="col text-left d-none d-md-block"
                style={logoStyle}
              >
                devslist
              </div>
              <div className="col text-left">
                <h5 className="mt-2">Social</h5>
                <div className="socials mt-4">
                  <p>
                    {" "}
                    <a href="#" target="_blank" style={footerLinks}>
                      Slack Community
                    </a>
                  </p>
                </div>
              </div>
              <div className="col text-left d-none d-md-block">
                <h5 className="mt-2">Quick Links</h5>
                <div className="quick-links mt-4">
                  <p>
                    <Link to="/jobs" style={footerLinks}>
                      Jobs
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link
                      to="#"
                      style={footerLinks}
                      onClick={() => setContactModalShow(true)}
                    >
                      Contact
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col text-left">
                <h5 className="mt-2">Job Categories</h5>
                <div className="quick-links mt-4">
                  <p>
                    <Link
                      to="/jobs"
                      style={footerLinks}
                      onClick={() => getSearchJobs("javascript")}
                    >
                      Remote Javascript Jobs
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link
                      to="/jobs"
                      style={footerLinks}
                      onClick={() => getSearchJobs("react")}
                    >
                      Remote React Jobs
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link
                      to="/jobs"
                      style={footerLinks}
                      onClick={() => getSearchJobs("python")}
                    >
                      Remote Python Jobs
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link
                      to="/jobs"
                      style={footerLinks}
                      onClick={() => getSearchJobs("php")}
                    >
                      Remote PHP Jobs
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link to="/jobs" style={footerLinks}>
                      Remote Developer Jobs
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const footerStyle = {
  paddingTop: "105px",
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "30px",
};

const footerLinks = {
  color: "#6B6B6B",
};

export default Footer;
