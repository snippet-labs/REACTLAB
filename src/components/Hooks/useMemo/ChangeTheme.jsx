import { useMemo, useState } from "react";

const ChangeTheme = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  function slowFunction(num) {
    console.log("Calling slow function");
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  }

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default ChangeTheme;
