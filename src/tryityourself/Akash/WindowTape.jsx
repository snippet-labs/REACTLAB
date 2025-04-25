import React, { useState, useEffect } from "react";

const WindowTape = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleHeight = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleHeight);
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWidth);
  }, []);

  return (
    <div className="Background">
      <div className="ScreenSize">
        {width} x {height}
      </div>
    </div>
  );
};

export default WindowTape ;
