import React, { useContext, useEffect } from "react";
import SkeletonLoader from "../SkeletonLoader";

import JobContext from "../../context/jobs/jobContext";

const JobDetails = () => {
  const jobContext = useContext(JobContext);

  const { activeJob, jobLoading } = jobContext;

  console.log(activeJob);

  //manipulate categories display and get link from activejob

  let categories;

  if (activeJob != null) {
    categories = activeJob.categories.map((cat) => {
      return (
        <span
          className="badge mr-2
      p-2  "
          style={categoriesStyle}
        >
          {cat}
        </span>
      );
    });
  }

  return (jobLoading == false) & (activeJob != null) ? (
    <div className="container " style={containerStyle}>
      <div className="job-title-row d-flex flex-row" style={jobRowStyle}>
        <div className="letter-logo-container pt-2" style={letterLogoStyle}>
          <div className="logo-letter text-center ">
            {activeJob.company.split("")[0]}
          </div>
        </div>
        <h3 class="ml-3 my-auto" style={titleStyle}>
          {activeJob.title}
        </h3>
      </div>

      <div className="company-row " style={companyRowStyle}>
        <h6>
          <strong>{activeJob.company}</strong>
        </h6>
      </div>

      <div className="job-categories  mt-4">{categories} </div>

      <a href={activeJob.link} target="__blank">
        <button className="btn btn-outline-primary mt-4" style={btnStyle}>
          Apply
        </button>
      </a>

      <hr className="mt-4 mb-4" />

      <div
        className="job-description"
        dangerouslySetInnerHTML={{ __html: activeJob.description }}
      ></div>
    </div>
  ) : (
    <SkeletonLoader />
  );
};

const containerStyle = {
  padding: "40px",
};

const titleStyle = {
  fontWeight: "bold",
};

const jobRowStyle = {
  height: "60px",
};

const letterLogoStyle = {
  fontSize: "26px",
  width: "70px",
  height: "100%",
  color: "rgb(130,130,130) ",
  backgroundColor: "rgb(245,245,245)",
};

const categoriesStyle = {
  backgroundColor: "rgb(240,240,240)",
  color: "rgb(100,100,100)",
  fontSize: "12px",
  border: "0px solid black",
  borderRadius: "0px",
};

const companyRowStyle = {
  marginTop: "35px",
};

const btnStyle = {
  width: "150px",
};
export default JobDetails;
