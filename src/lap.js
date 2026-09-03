import React from "react";

const Lap = ({ laps }) => {
  if (laps.length === 0) return null;

  return (
    <div className="lap-section">
      <ul className="lap-list">
        {laps
          .map((lap, index) => (
            <li className="lap-item" key={index}>
              <span className="lap-number">Lap {index + 1}</span>
              <span className="lap-time">{lap.time}</span>
              <span className="lap-diff">+{lap.diff}</span>
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default Lap;
