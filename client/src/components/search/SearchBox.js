import React, { useContext, useState, useRef } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import JobContext from "../../context/jobs/jobContext";

const SearchBox = (props) => {
  const history = useHistory();

  const jobContext = useContext(JobContext);

  const { getSearchJobs, setLoading, clearAllJobs, searchJobs } = jobContext;

  let searchValue = useRef("");

  //Select search input to manipulate
  const searchInput = document.querySelector("#search-input");

  //Change search value on input change
  const onChange = (e) => {
    searchValue.current = e.target.value;
  };

  //Logic for form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    searchInput.value = "";

    setLoading();

    getSearchJobs(searchValue.current);
  };

  //Clear search results
  const clearSearch = () => {};

  return (
    <div className="mb-2">
      <div className="mt-4">
        <form onSubmit={onSubmit}>
          <div className="input-group search-input ">
            <div className="input mb-3  " style={inputStyle}>
              <input
                type="text"
                className="form-control search-input-field   "
                placeholder="Search by key words..."
                aria-label="key words"
                aria-describedby="basic-addon2"
                onChange={onChange}
                style={searchStyle}
                name="searchValue"
                required
                id="search-input"
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

      {searchJobs && (
        <div className="categories-badge-container d-flex flex-row">
          <div className="badge bg-primary p-2 text-light " style={badgeStyle}>
            {searchValue.current}
          </div>

          <div className="pl-1" style={clearBtnContainerStyle}>
            <span id="clear-btn" style={clearBtnStyle}>
              x
            </span>
          </div>
        </div>
      )}
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

const badgeStyle = {
  fontSize: "13px",
};

const clearBtnContainerStyle = {
  position: "relative",
};

const clearBtnStyle = {
  color: "rgb(190,190,190)",
  fontWeight: "bold",
  fontSize: "14px",
  position: "relative",
  top: "-12px",
};

export default SearchBox;
