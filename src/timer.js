import React from "react";
import { GrFlagFill, GrPowerReset, GrPlayFill } from "react-icons/gr";
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
        <p className="milisecond">{`. ${milli > 9 ? milli : "0" + milli}`}</p>
      </div>

      <div className="buttons-section">
        <div className="btn-with-title">
          <button className="lap-btn" type="button">
            <GrFlagFill />
          </button>
          <p>Lap</p>
        </div>

        <button className="start-btn" type="button">
          <GrPlayFill /> Start
        </button>

        <div className="btn-with-title">
          <button className="reset-btn" type="button">
            <GrPowerReset />
          </button>
          <p>Reset</p>
        </div>
      </div>
    </div>
  );
};
export default Timer;
