import { useCallback, useState } from "react";
import List from "./List";

const DisplayList = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default DisplayList;
