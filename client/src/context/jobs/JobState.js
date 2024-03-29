import React, { useReducer } from "react";
import axios from "axios";
import JobContext from "./jobContext";
import JobReducer from "./jobReducer";

//bring in the types
import {
  GET_HOMEPAGE_JOBS,
  GET_SEARCH_JOBS,
  GET_ALL_JOBS,
  SET_ALL_JOBS,
  SET_LOADING,
  CLEAR_LOADING,
  CLEAR_ALL_JOBS,
  ALL_JOBS_SKIP,
  ADD_HOME_JOBS,
  SET_ACTIVE_JOB,
  CLEAR_JOB_LOADING,
  SET_JOB_LOADING,
  CLEAR_SEARCH_JOBS,
} from "../Types";

const JobState = (props) => {
  const initialState = {
    searchJobs: null,
    homeJobs: null,
    jobs: null,
    allJobs: false,
    activeJob: null,
    loading: true,
    jobLoading: false,
  };

  const [state, dispatch] = useReducer(JobReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  //clear loading
  const clearLoading = () => {
    dispatch({ type: CLEAR_LOADING });
  };

  //clear search jobs
  const clearAllJobs = () => {
    dispatch({ type: CLEAR_ALL_JOBS });
  };

  // retreive first 10 jobs for the home page
  const getHomePageJobs = async () => {
    try {
      const data = await axios.get(
        "/api/jobs?limit=30"
      );
      const jobs = data.data.jobs;
      console.log(data)

      dispatch({ type: GET_HOMEPAGE_JOBS, payload: jobs });
    } catch (err) {
      console.log(err.message);
    }
  };

  //retrieve jobs for the search page
  const getSearchJobs = async (query) => {
    setLoading();

    try {
      const data = await axios.get(
        `/api/jobs?category=${query}`
      );
      const jobs = data.data.jobs;
      console.log(jobs);

      dispatch({
        type: GET_SEARCH_JOBS,
        payload: jobs,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  //retrieve all jobs
  const getAllJobs = async () => {
    if (state.jobs === null) {
      setLoading();
      try {
        const data = await axios.get(
          `/api/jobs?all=true`
        );
        const jobs = await data.data.jobs;
         
        dispatch({ type: SET_ALL_JOBS });

        console.log(jobs);
         dispatch({
          type: GET_ALL_JOBS,
          payload: jobs,
        });

         dispatch({ type: SET_ACTIVE_JOB, payload: jobs[0] });
        clearLoading();
      } catch (err) {
        console.log(err.message);
      }
    } else {
      dispatch({ type: SET_ALL_JOBS });
    }
  };

  const allJobsSkip = async (skipAmount) => {
    try {
      const data = await axios.get(
        `/api/jobs?skip=${skipAmount}`
      );
      const jobs = await data.data.jobs;
      dispatch({ type: "ALL_JOBS_SKIP", payload: jobs });
      console.log(jobs);
    } catch (err) {
      console.log(err);
    }
  };

  const addHomeJobs = async (skipAmount) => {
    try {
      const data = await axios.get(
        `/api/jobs?skip=${skipAmount}`
      );
      const jobs = await data.data.jobs;
      dispatch({ type: ADD_HOME_JOBS, payload: jobs });
    } catch (err) {
      console.log(err);
    }
  };

  //Set active job to display in Job DEtails section

  const setActiveJob = async (jobId) => {
    setJobLoading();

    let activeJob;

    if (state.searchJobs == null) {
      activeJob = state.jobs.filter((job) => {
        return job.id == jobId;
      });
    } else {
      activeJob = state.searchJobs.filter((job) => {
        return job.id == jobId;
      });
    }

    try {
      dispatch({ type: SET_ACTIVE_JOB, payload: activeJob[0] });
    } catch (error) {
      console.log(error);
    }
  };

  //clear Search jobs
  const clearSearchJobs = () => {
    dispatch({ type: CLEAR_SEARCH_JOBS });
  };

  //Set job loading for UX purposes
  const setJobLoading = async () => {
    await dispatch({ type: SET_JOB_LOADING });

    setTimeout(() => {
      dispatch({ type: CLEAR_JOB_LOADING });
    }, 2000);
  };

  //We return the provider , we wrap our whole application in this
  return (
    <JobContext.Provider
      value={{
        homeJobs: state.homeJobs,
        searchJobs: state.searchJobs,
        allJobs: state.allJobs,
        jobs: state.jobs,
        loading: state.loading,
        activeJob: state.activeJob,
        jobLoading: state.jobLoading,
        getHomePageJobs,
        getSearchJobs,
        setLoading,
        getAllJobs,
        clearAllJobs,
        allJobsSkip,
        addHomeJobs,
        setActiveJob,
        clearSearchJobs,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
};
export default JobState;
