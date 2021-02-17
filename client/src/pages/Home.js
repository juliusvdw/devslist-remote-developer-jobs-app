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
            <h1 className="header-main-text mb-3" style={headerMainTextStyle}>
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

      <div className="searchbox-container container">
        <SearchBox />
      </div>

      <section style={jobSectionBackgroundStyle}>
        <div className="container" style={jobSectionStyle}>
          <div className="row w-100 ">
            <div className="col-lg-4 ">
              <div style={jobsLeftContainerStyle}>
                <Jobs style={jobsLeftStyle} />
              </div>
            </div>

            <div className="col-lg-8  bg-white"></div>
          </div>
        </div>
      </section>

      {/* <div className="row ">
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
      </div> */}
      <Footer setContactModalShow={props.setContactModalShow} />
    </div>
  );
};

const sectionStyle = {
  height: "110vh",
};

const headerStyle = {
  paddingTop: "17vh",
  height: "42vh",
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
  height: "80vh",
};

const jobSectionBackgroundStyle = {
  height: "80vh",
  backgroundColor: "#f2f8ff",
};

const jobsLeftStyle = {
  padding: "30px !important",
};

const jobsLeftContainerStyle = {
  height: " 70vh ",
};

export default Home;
