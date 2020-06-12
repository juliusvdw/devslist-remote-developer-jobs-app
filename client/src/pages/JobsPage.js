import React, { useContext, useEffect, useState } from "react";
import Jobs from "../components/jobs/Jobs";
import SearchBox from "../components/search/SearchBox";
import Footer from "../components/layout/Footer";
import Loading from "../components/layout/Loading";

import JobContext from "../context/jobs/jobContext";

const JobsPage = (props) => {
  //set state
  const [moreLoading, setMoreLoading] = useState(false);

  //pull whats needed from props
  const { setContactModalShow } = props;

  const jobContext = useContext(JobContext);

  const {
    searchJobs,
    homeJobs,
    getHomePageJobs,
    loading,
    allJobs,
    jobs,
    getAllJobs,
    allJobsSkip,
    addHomeJobs,
  } = jobContext;

  useEffect(() => {
    if (homeJobs === null) {
      getHomePageJobs();
    }
  }, []);

  const loadMore = async () => {
    setMoreLoading(true);
    try {
      if (allJobs === true) {
        await allJobsSkip(jobs.length);
        setMoreLoading(false);
      }

      if (allJobs === false) {
        await addHomeJobs(homeJobs.length);
        setMoreLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //determine how the button displays
  let loadMoreBtn;
  moreLoading === true
    ? (loadMoreBtn = <Loading />)
    : (loadMoreBtn = (
        <div
          className="btn btn-lg btn-outline-primary mx-auto"
          onClick={loadMore}
        >
          View More
        </div>
      ));

  return (
    <div className="jobs-background">
      <div className="row ">
        <div
          className="col-lg-9  offset-md-3 mx-auto text-center d-none d-md-block "
          style={{
            marginTop: "140px",
            marginBottom: "20px",
            fontSize: "60px",
            fontWeight: "bold",
            color: "#24285B",
          }}
        >
          All the remote dev jobs in one place.{" "}
        </div>
        <div clasName="col d-md-none" style={{ minHeight: "100px" }}></div>
      </div>

      <div className="row " style={{ marginBottom: "25px" }}>
        <div className="col-lg-10 mx-auto d-none d-md-flex">
          <div className="mx-auto " style={{ width: "60%" }}>
            <SearchBox className="w-100" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col d-block d-md-none  ">
          <SearchBox className="w-100" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 mx-auto ">
          <Jobs />
          <div className="text-center mt-4">
            {allJobs === true &&
            jobs !== null &&
            jobs.length < 350 &&
            loading === false ? (
              loadMoreBtn
            ) : (
              <></>
            )}

            {loading === false && allJobs === false && searchJobs === null ? (
              loadMoreBtn
            ) : (
              <> </>
            )}
          </div>
        </div>
      </div>
      <Footer setContactModalShow={setContactModalShow} />
    </div>
  );
};

export default JobsPage;
