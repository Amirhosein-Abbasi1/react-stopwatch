import React, { useRef } from "react";
import {
  GrFlagFill,
  GrPowerReset,
  GrPlayFill,
  GrPauseFill,
} from "react-icons/gr";
import { useState } from "react";
import Lap from "./lap";

const formatTime = (totalMs) => {
  const mm = Math.floor(totalMs / 60000);
  const ss = Math.floor((totalMs % 60000) / 1000);
  const ms = Math.floor((totalMs % 1000) / 10);
  return `${mm > 9 ? mm : "0" + mm}:${ss > 9 ? ss : "0" + ss}.${
    ms > 9 ? ms : "0" + ms
  }`;
};

const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milliSecond, setMilliSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [laps, setLaps] = useState([]);

  const timerRef = useRef(null);

  let m = minute;
  let s = second;
  let milli = milliSecond;

  const startTimer = () => {
    if (isStart) return;
    setIsStart(true);

    timerRef.current = setInterval(() => {
      setMilliSecond((prev) => {
        if (prev === 99) {
          setSecond((prev) => prev + 1);
          return 0;
        }
        return prev + 1;
      });

      setSecond((prev) => {
        if (prev === 60) {
          setMinute((prev) => prev + 1);
          return 0;
        }
        return prev;
      });

      setMinute((prev) => {
        if (prev === 60) {
          return 0;
        }
        return prev;
      });
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsStart(false);
  };

  const lapTimer = () => {
    if (!isStart) return;

    const currentTotalMs = m * 60000 + s * 1000 + milli * 10;

    setLaps((prev) => {
      const lastTotalMs = prev.length > 0 ? prev[prev.length - 1].totalMs : 0;
      const diffMs = currentTotalMs - lastTotalMs;

      return [
        ...prev,
        {
          totalMs: currentTotalMs,
          time: formatTime(currentTotalMs),
          diff: formatTime(diffMs),
        },
      ];
    });
  };

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
          <button
            className="lap-btn"
            type="button"
            onClick={lapTimer}
            disabled={!isStart}
          >
            <GrFlagFill />
          </button>
          <p>Lap</p>
        </div>

        <button
          className="start-btn"
          type="button"
          onClick={isStart ? stopTimer : startTimer}
        >
          {isStart ? <GrPauseFill /> : <GrPlayFill />}
          {isStart ? "Stop" : "Start"}
        </button>

        <div className="btn-with-title">
          <button className="reset-btn" type="button">
            <GrPowerReset />
          </button>
          <p>Reset</p>
        </div>
      </div>

      <Lap laps={laps} />
    </div>
  );
};
export default Timer;
