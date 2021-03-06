import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../components/search/SearchBox";
import Jobs from "../components/jobs/Jobs";
import JobDetails from "../components/jobs/JobDetails";
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
    jobs,
    setActiveJob,

    activeJob,
  } = jobContext;

  useEffect(() => {
    getAllJobs();
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

      <div className="searchbox-section" style={searchboxSectionStyle}>
        <div className="searchbox-container container">
          <SearchBox />
        </div>
      </div>

      <section style={jobSectionBackgroundStyle}>
        <div className="container" style={jobSectionStyle}>
          <div className="row w-100 ">
            <div className="col-lg-5 col-sm-12 mx-auto">
              <div style={jobsLeftContainerStyle}>
                <Jobs style={jobsLeftStyle} />
              </div>
            </div>

            <div
              className=" jobs-right col-lg-7  bg-white "
              style={jobsRightContainerStyle}
            >
              <JobDetails />
            </div>
          </div>
        </div>
      </section>

      {/* <Footer setContactModalShow={props.setContactModalShow} /> */}
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
  backgroundColor: "rgb(245, 247, 251",
};

const jobsLeftStyle = {
  padding: "30px !important",
};

const jobsLeftContainerStyle = {
  height: " 80vh ",
  width: "100%",
};
const jobsRightContainerStyle = {
  overflow: "auto",
  height: "80vh",
};

const searchboxSectionStyle = {
  position: "sticky",
  top: "59px",
  zIndex: "999",
  backgroundColor: "white",
  minHeight: "70px",
  borderBottom: "2px solid rgb(240,240,240)",
};

export default Home;
