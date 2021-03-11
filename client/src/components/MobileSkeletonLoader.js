import React from "react";
import ContentLoader from "react-content-loader";

const MobileSkeletonLoader = (props) => {
  return (
    <div className="skeleton-container container" style={containerStyle}>
      <ContentLoader
        speed={2}
        width={300}
        height={700}
        viewBox="0 0 350 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="78" y="19" rx="3" ry="3" width="300" height="24" />
        <rect x="4" y="5" rx="0" ry="0" width="59" height="53" />
        <rect x="4" y="168" rx="3" ry="3" width="300" height="30" />
        <rect x="4" y="91" rx="3" ry="3" width="150" height="20" />
        <rect x="4" y="123" rx="3" ry="3" width="320" height="20" />
        <rect x="4" y="213" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="259" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="305" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="349" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="394" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="438" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="320" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="523" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="569" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="615" rx="3" ry="3" width="320" height="30" />
        <rect x="4" y="660" rx="3" ry="3" width="320" height="30" />
      </ContentLoader>
    </div>
  );
};

const containerStyle = {
  padding: "40px",
};

export default MobileSkeletonLoader;
