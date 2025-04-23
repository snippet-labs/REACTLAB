import React, { useEffect, useRef, useState } from "react";

// ICONS
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { LuTimerReset } from "react-icons/lu";

const StopWatch = () => {
  // STATES
  const [isRunning, setIsRuning] = useState(() => {
    return false;
  });
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(0);
  const intervalTimeRef = useRef(null);

  //   SIDE-EFFECTS
  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      intervalTimeRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);

      return () => clearInterval(intervalTimeRef.current);
    }
  }, [isRunning]);

  //   HANDLER FUNCTIONS
  const handleStartOrStop = () => {
    return setIsRuning((previous) => !previous);
  };

  const handleReset = () => {
    setIsRuning(false);
    setElapsedTime(0);
  };

  const displayStopWatchTime = (elapsedTime) => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `
    ${hours.toString().padStart(2, "0")}:
    ${minutes.toString().padStart(2, "0")}:
    ${seconds.toString().padStart(2, "0")}:
    ${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="CONTAINER">
      <div className="text-6xl">{displayStopWatchTime(elapsedTime)}</div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <button className="BUTTON" onClick={handleStartOrStop}>
          {isRunning ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        <button className="BUTTON" onClick={handleReset}>
          <LuTimerReset size={20} />
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
