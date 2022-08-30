import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Rating({ rate }) {
  return (
    <div>
      <div className="w-12 h-12 font-semibold bg-black rounded-[50%] p-1 ">
        <CircularProgressbar
          styles={buildStyles({
            textSize: "36px",

            pathColor: `#20C876`,

            trailColor: "#0F2924",
            backgroundColor: "#0F2924",
            textColor: "#ffff",
          })}
          value={rate * 10}
          text={`${rate * 10}%`}
          strokeWidth={10}
        />
      </div>
    </div>
  );
}

export default Rating;
