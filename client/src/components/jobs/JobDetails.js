import React, { useContext } from "react";

import JobContext from "../../context/jobs/jobContext";

const JobDetails = () => {
  const jobContext = useContext(JobContext);
  const { jobs } = jobContext;

  if (jobs !== null) {
    return (
      <div className="container-fluid">
        <h1>{jobs[0].description}</h1>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default JobDetails;
