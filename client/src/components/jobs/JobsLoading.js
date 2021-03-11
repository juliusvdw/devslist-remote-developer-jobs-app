import React from "react";
import ContentLoader from "react-content-loader";

const JobLoading = (props) => {
  return (
    <div className="card " style={cardStyle}>
      <ContentLoader
        className="pt-4"
        speed={2}
        width={400}
        height={700}
        viewBox="0 0 400 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="53" y="12" rx="3" ry="3" width="400" height="18" />
        <rect x="4" y="5" rx="0" ry="0" width="37" height="33" />
        <rect x="4" y="55" rx="3" ry="3" width="400" height="17" />
        <rect x="7" y="87" rx="3" ry="3" width="400" height="17" />
        <rect x="59" y="203" rx="3" ry="3" width="400" height="18" />
        <rect x="10" y="196" rx="0" ry="0" width="37" height="33" />
        <rect x="10" y="246" rx="3" ry="3" width="400" height="17" />
        <rect x="13" y="278" rx="3" ry="3" width="400" height="17" />
        <rect x="62" y="388" rx="3" ry="3" width="400" height="18" />
        <rect x="13" y="381" rx="0" ry="0" width="37" height="33" />
        <rect x="13" y="431" rx="3" ry="3" width="400" height="17" />
        <rect x="16" y="463" rx="3" ry="3" width="400" height="17" />
        <rect x="65" y="582" rx="3" ry="3" width="400" height="18" />
        <rect x="16" y="575" rx="0" ry="0" width="37" height="33" />
        <rect x="16" y="625" rx="3" ry="3" width="400" height="17" />
        <rect x="19" y="657" rx="3" ry="3" width="400" height="17" />
      </ContentLoader>
    </div>
  );
};

const cardStyle = {
  height: "80vh",
};

export default JobLoading;
