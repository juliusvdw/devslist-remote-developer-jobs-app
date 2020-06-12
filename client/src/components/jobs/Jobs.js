import React, { useContext } from "react";
import JobItem from "./JobItem";
import Button from "react-bootstrap/Button";
import Loading from "../layout/Loading";
import JobContext from "../../context/jobs/jobContext";

const Jobs = () => {
  const jobContext = useContext(JobContext);
  const { homeJobs, searchJobs, loading, allJobs, jobs } = jobContext;

  if (loading === true) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }

  if (allJobs === true && jobs !== null) {
    return (
      <div>
        {jobs.map((job) => {
          return <JobItem job={job} />;
        })}
      </div>
    );
  }

  if (loading === false && homeJobs !== null) {
    return (
      <div>
        {homeJobs.map((job) => {
          return <JobItem job={job} />;
        })}
      </div>
    );
  }
  if (searchJobs !== null && loading === false) {
    return (
      <div>
        {searchJobs.length < 1 ? (
          <div className="text-center">
            {" "}
            <h1>No Jobs found</h1>
          </div>
        ) : (
          searchJobs.map((job) => {
            return <JobItem job={job} />;
          })
        )}
      </div>
    );
  }
};

export default Jobs;
