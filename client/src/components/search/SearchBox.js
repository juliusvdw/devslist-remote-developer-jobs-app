import React, { useContext, useState, useRef } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import JobContext from "../../context/jobs/jobContext";

const SearchBox = (props) => {
  const history = useHistory();

  const jobContext = useContext(JobContext);

  const { getSearchJobs, setLoading, clearAllJobs } = jobContext;

  let searchValue = useRef("");

  const onChange = (e) => {
    searchValue.current = e.target.value;

    console.log(searchValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading();
    clearAllJobs();

    history.push("/jobs");

    getSearchJobs(searchValue.current);
  };

  return (
    <div>
      <div className="mt-4">
        <form onSubmit={onSubmit}>
          <div className="input-group search-input ">
            <div className="input mb-3  " style={inputStyle}>
              <input
                type="text"
                className="form-control   "
                placeholder="Search by key words..."
                aria-label="key words"
                aria-describedby="basic-addon2"
                onChange={onChange}
                style={searchStyle}
                name="searchValue"
                required
              ></input>
            </div>

            <div className="mr-auto">
              <button
                className="btn btn-primary ml-4 "
                type="submit"
                style={btnStyle}
              >
                <strong>SEARCH</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  minWidth: "450px",
};
const searchStyle = {
  border: "none",
  backgroundColor: "rgb(250,250,250)",

  borderBottom: "1px solid gray",
  borderRadius: "0px",
  fontSize: "16px",
};

const btnStyle = {
  width: "150px",
};

export default SearchBox;
