import React, { useState, useEffect } from "react";

const RandomBg = () => {
  const [rbg, setRbg] = useState();

  // FUNCTION FOR COLOR CHANGE (took help for the math.random() part)
  const ChangeBg = () => {
    const randomColors = "#" + Math.random().toString(16).slice(2, 8);
    setRbg(randomColors);
  };

  // USE EFFECT TO CHANGE BACKGROUND AT INTERVALS (took help for implying setInterval inside useEffect )
  useEffect(() => {
    const interval = setInterval(ChangeBg, 1500);
  }, []);

  return (
    <div className="random-bg" style={{ backgroundColor: rbg }}>
      <div className="text">Random Background Color</div>
    </div>
  );
};
export default RandomBg;
