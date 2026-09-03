import { BiAlarm, BiSolidMoon, BiSolidSun } from "react-icons/bi";

const Title = ({ theme, toggleTheme }) => {
  return (
    <div className="title-main-div">
      <div className="title-left">
        <button className="world-time-btn">
          <span className="world-time-icon">
            <BiAlarm />
          </span>
          <span className="world-time-text">Clock</span>
        </button>
      </div>

      <p className="title-name">Stopwatch</p>

      <div className="title-right">
        <button className="theme-btn" type="button" onClick={toggleTheme}>
          <span
            className={`theme-dark-mode-btn${
              theme === "dark" ? " active" : ""
            }`}
          >
            <BiSolidMoon />
          </span>
          <span
            className={`theme-light-mode-btn${
              theme === "light" ? " active" : ""
            }`}
          >
            <BiSolidSun />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Title;
