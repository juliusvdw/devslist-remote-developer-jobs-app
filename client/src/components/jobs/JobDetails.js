import React, { useContext, useEffect } from "react";

import JobContext from "../../context/jobs/jobContext";

const JobDetails = () => {
  const jobContext = useContext(JobContext);

  const { activeJob } = jobContext;

  return activeJob != null ? <h1>{activeJob.id}</h1> : <h1>Loading</h1>;
};
export default JobDetails;
