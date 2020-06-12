import React from "react";

const Loading = () => {
  return (
    <div
      class="spinner-border  text-primary"
      role="status"
      style={{ width: "3.5rem", height: "3.5rem", marginTop: "30px" }}
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
