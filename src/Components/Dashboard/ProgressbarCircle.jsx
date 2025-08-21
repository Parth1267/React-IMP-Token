import React, { useContext, useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import { ImpC } from "../../Myontext";
export default function ProgressbarCircle() {
  const {
    account,
    smuser,
    copyaddress, formatDate,
    locked,
  } = useContext(ImpC);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (smuser) {
      // var rem = smuser._locked - smuser._claimed
      var finda = (smuser._claimed * 100) / smuser._locked;
      setProgress(isNaN(finda) ? 0 : finda.toFixed(2))

    }
  }, [smuser])
  const percentage = 66;
  return (
    <>
      <CircularProgressbarWithChildren
        value={progress}
        text={`${progress}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "butt",
          pathColor: "#00ea5b",
          trailColor: "#0078e7",
          width: 40,
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: "#fff",
            width: "2px",
            // This needs to be equal to props.strokeWidth
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>
    </>
  );
}
