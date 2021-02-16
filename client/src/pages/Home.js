import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../components/search/SearchBox";
import Jobs from "../components/jobs/Jobs";
import JobContext from "../context/jobs/jobContext";
import Footer from "../components/layout/Footer";

const Home = (props) => {
  const jobContext = useContext(JobContext);

  const {
    getHomePageJobs,
    homeJobs,
    searchJobs,
    setLoading,
    loading,
    getAllJobs,
  } = jobContext;

  useEffect(() => {
    getHomePageJobs();
  }, []);

  return (
    <div style={sectionStyle} className="home-background">
      <div className="header" style={headerStyle}>
        <div className="container">
          <div className="header-text-container" style={headerTextStyle}>
            <h1 className="header-text" style={headerMainTextStyle}>
              The Latest Remote developer jobs
            </h1>
            <p className="header-sub-text" style={headerSubTextStyle}>
              We crawl the web for hundreds of remote developer jobs. You save
              time and energy finding everything right in one place. Find your
              next remote job opportuinty on our job board.
            </p>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-lg-9 mx-auto" style={jobSectionStyle}>
          <Jobs />

          {!loading && (
            <div className="w-75 text-center mx-auto">
              <div className=" mt-4 mb-4">
                <Link to="/jobs" onClick={() => getAllJobs()}>
                  {" "}
                  <button
                    className="btn btn-lg btn-outline-primary browse-btn"
                    style={buttonStyle}
                  >
                    Browse All Jobs
                  </button>{" "}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer setContactModalShow={props.setContactModalShow} />
    </div>
  );
};

const sectionStyle = {
  height: "110vh",
};

const firstSectionStyle = {
  height: "40vh",
};

const imageStyle = {
  position: "relative",

  marginLeft: "-90px",
  marginTop: "50px",
  width: "750px",
};

const headingStyle = {
  marginTop: "180px",
  color: "#24285B",
};

const inputStyle = {
  width: "85%",
  marginBottom: "50px",
};

const headerStyle = {
  paddingTop: "17vh",
  height: "40vh",
  backgroundColor: " rgb(233, 238, 250)",
  color: "rgb(2, 27, 156)",
};

const headerTextStyle = {
  maxWidth: "521px",
};

const headerMainTextStyle = {
  fontSize: "32px",
  fontWeight: "bold",
};
const headerSubTextStyle = {
  fontSize: "17px",
};

const jobSectionStyle = {
  paddingTop: "15px",
};

const buttonStyle = {
  marginTop: "30px",
  borderWidth: "2px",
  fontSize: "18px",
};

export default Home;
