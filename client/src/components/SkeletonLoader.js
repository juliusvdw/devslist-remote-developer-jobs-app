import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = (props) => {
  return (
    <div className="skelton-container container" style={containerStyle}>
      <ContentLoader
        speed={2}
        width={490}
        height={700}
        viewBox="0 0 490 700"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="78" y="19" rx="3" ry="3" width="483" height="24" />
        <rect x="4" y="5" rx="0" ry="0" width="59" height="53" />
        <rect x="4" y="168" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="91" rx="3" ry="3" width="238" height="20" />
        <rect x="4" y="123" rx="3" ry="3" width="300" height="20" />
        <rect x="4" y="213" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="259" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="305" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="349" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="394" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="438" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="480" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="523" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="569" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="615" rx="3" ry="3" width="480" height="30" />
        <rect x="4" y="660" rx="3" ry="3" width="480" height="30" />
      </ContentLoader>
    </div>
  );
};

const containerStyle = {
  padding: "40px",
};

export default SkeletonLoader;
