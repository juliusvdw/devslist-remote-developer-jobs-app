import {
  GET_SEARCH_JOBS,
  GET_HOMEPAGE_JOBS,
  GET_ALL_JOBS,
  SET_ALL_JOBS,
  SET_LOADING,
  CLEAR_LOADING,
  ALL_JOBS_SKIP,
  CLEAR_ALL_JOBS,
  ADD_HOME_JOBS,
  SET_ACTIVE_JOB,
  SET_JOB_LOADING,
  CLEAR_JOB_LOADING,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_HOMEPAGE_JOBS:
      return {
        ...state,
        allJobs: false,
        homeJobs: action.payload,
        loading: false,
      };
    case GET_SEARCH_JOBS:
      return {
        ...state,
        allJobs: false,
        homeJobs: null,
        searchJobs: action.payload,
        loading: false,
      };
    case CLEAR_ALL_JOBS:
      return {
        ...state,
        allJobs: false,
      };

    case GET_ALL_JOBS:
      return {
        ...state,
        allJobs: true,
        jobs: action.payload,
      };
    case ALL_JOBS_SKIP:
      return {
        ...state,
        allJobs: true,
        jobs: [...state.jobs, ...action.payload],
      };
    case ADD_HOME_JOBS:
      return {
        ...state,
        allJobs: false,
        homeJobs: [...state.homeJobs, ...action.payload],
      };
    case SET_ACTIVE_JOB:
      return {
        ...state,
        activeJob: action.payload,
      };
    case SET_ALL_JOBS:
      return {
        ...state,
        allJobs: true,
        searchJobs: null,
      };
    case SET_JOB_LOADING:
      return {
        ...state,
        jobLoading: true,
      };
    case CLEAR_JOB_LOADING:
      return {
        ...state,
        jobLoading: false,
      };

    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
