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
      <div className="row">
        <div
          className="col-lg-7 col-md-10 col-sm-10  text-center offset-md-1 mx-auto "
          style={headingStyle}
        >
          <div className="first-left-section mx-auto" style={{ width: "85%" }}>
            <h1
              style={{ fontWeight: "bold", fontSize: "4rem" }}
              className="d-none d-md-block"
            >
              Find your next <span style={{ color: "#883aa5" }}>remote</span>{" "}
              developer job.
            </h1>
            <h1
              style={{ fontWeight: "bold", fontSize: "3rem" }}
              className="d-md-none"
            >
              Find your next remote developer job.
            </h1>
            <p
              className=" d-none d-md-block"
              style={{ fontSize: "28px", color: "#24285B" }}
            >
              We scan the web so you don't have to.
            </p>

            <div className="  mt-4 mx-auto " style={inputStyle}>
              <SearchBox />
            </div>
          </div>
        </div>
        <div
          className="col-lg-5  d-none d-lg-block"
          style={{ overflow: "hidden", minHeight: "600px" }}
        >
          <img src="art1.svg" style={imageStyle}></img>
        </div>
      </div>

      <div className="row ">
        <div className="col-lg-9 mx-auto" style={jobSectionStyle}>
          <div
            className="text-center "
            style={{
              marginTop: "-40px",
              color: "#343951",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                color: "#343951",
                marginBottom: "35px",
              }}
              className="d-none d-md-block"
            >
              Browse Positions in your favourite tech.
            </h1>
          </div>
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

const jobSectionStyle = {
  paddingTop: "15px",
};

const buttonStyle = {
  marginTop: "30px",
  borderWidth: "2px",
  fontSize: "18px",
};

export default Home;
