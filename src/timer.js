import React from "react";
import { useState } from "react";

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milliSecond, setMilliSecond] = useState(0);

  let m = minute;
  let s = second;
  let milli = milliSecond;

  return (
    <div className="timer-component-main-div">

      <div className="timer-section">
        <p className="minute-and-second">
          {` ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s} `}
        </p>
        <p className="milisecond">
          {`. ${milli > 9 ? milli : "0" + milli}`}
        </p>
      </div>

      <div className="buttons-section"></div>
    </div>
  );
};
export default Timer;
