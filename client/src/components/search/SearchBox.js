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
      <div className="col d-none d-md-block text-center">
        <form onSubmit={onSubmit}>
          <div className="input-group ">
            <div className="input mb-3 w-75  mx-auto ">
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

            <div style={{ width: "20%" }}>
              <button
                className="btn btn-outline-primary  "
                type="submit"
                style={btnStyle}
              >
                <strong>Search</strong>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="col d-block d-md-none mx-auto w-100 ">
        <form onSubmit={onSubmit}>
          <div className="input mb-3 w-100  mx-auto text-center">
            <input
              type="text"
              className="form-control  "
              placeholder="Search by key words..."
              aria-label="key words"
              aria-describedby="basic-addon2"
              onChange={onChange}
              style={searchStyle}
              name="searchValue"
              required
            ></input>
          </div>

          <div className="text-center mb-4 mx-auto">
            <button
              className="btn btn-outline-primary  "
              type="submit"
              style={btnStyle}
            >
              <strong>Search</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const searchStyle = {
  height: "55px",
  border: "1px solid black",
  fontSize: "18px",
};

const btnStyle = {
  height: "55px",
  border: "1.5px solid #343951",
  color: "#343951",
  width: "100%",
};

export default SearchBox;
