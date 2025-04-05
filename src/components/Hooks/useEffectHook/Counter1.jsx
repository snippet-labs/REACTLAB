import React from "react";
import { useState, useEffect } from "react";
const Counter1 = () => {
  const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);
//   console.log("Component Rendered");

  useEffect(() => {
    console.log("useEffect called");
  },[count]);

  const increment = () => {
    setCount(count + 1);
    console.log("Incremented");
  };

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increment}>Add</button>
      <h1>{count}</h1>
      <button onClick={decrement}>Subtract</button>
    </div>
  );
};

export default Counter1;
