import React from "react";

import CircularProgress from "@mui/material/CircularProgress";

export const ActivityOverlay = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(230, 230, 230, 0.55)",
      }}
    >
      <CircularProgress
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          color: "blue",
        }}
      />
    </div>
  );
};
