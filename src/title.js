import { BiAlarm, BiSolidMoon, BiSolidSun } from "react-icons/bi";

const Title = () => {
  return (
    <div>
      <button className="world-time-btn" type="button">
        <span className="world-time-icon">
          <BiAlarm />
        </span>
        <span className="world-time-text">World Clock</span>
      </button>

      <p className="title-name">Stopwatch</p>

      <button className="theme-btn" type="button">
        <span className="theme-dark-mode-btn"><BiSolidMoon /></span>
        <span className="theme-light-mode-btn"><BiSolidSun /></span>
      </button>
    </div>
  );
};

export default Title;
