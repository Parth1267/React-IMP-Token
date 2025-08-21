import React from "react";

const ProgressBar = ({ bgColor, progress }) => {
  const containerStyles = {
    height: 50,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 22,
    // margin: 50
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
    textAlign: "right"
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };

  return (
    <div className="progress-bar" style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
