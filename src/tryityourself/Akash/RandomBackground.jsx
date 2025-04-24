import React, { useState, useEffect } from "react";

const RandomBackground = () => {
  const [randomSplash, setRandomSplash] = useState();

  // FUNCTION FOR COLOR CHANGE (took help for the math.random() part)
  const ChangeBackground = () => {
    const randomColors = "#" + Math.random().toString(16).slice(2, 8);
    setRandomSplash(randomColors);
  };

  // USE EFFECT TO CHANGE BACKGROUND AT INTERVALS (took help for implying setInterval inside useEffect )
  useEffect(() => {
    const interval = setInterval(ChangeBackground, 1500);
  }, []);

  return (
    <div className="random-bg" style={{ backgroundColor: randomSplash }}>
      <div className="text">Random Background Color</div>
    </div>
  );
};
export default RandomBackground;
