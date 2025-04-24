import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  // let a =0;
  // function add (){
  //     a =+1;
  //     console.log(a);
  // }
  console.log("Component Rendered");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Subtract</button>
    </div>
  );
};

export default Counter;
