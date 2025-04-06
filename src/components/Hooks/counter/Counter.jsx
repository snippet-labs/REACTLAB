import React from 'react'
import { useState } from 'react';

const Counter = () => {

 const [counter,setCounter] = useState(0);

 const increment = () => {
    if(counter<20)
    setCounter(counter+1);
    else
    setCounter(0)
 }

  const decrement = () => {
    if(counter>0)
    setCounter(counter-1);
 }

 const reset = () => {
    if(counter>=1 || counter<=20)
        setCounter(0);
 }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center flex-col">
        <div className="flex items-center justify-center">
        <button className="p-6 bg-blue-500 rounded-md" onClick={increment}>Increment</button>
        <h1 className="p-6 bg-pink-500 rounded-md m-8 text-white">{counter}</h1>
        <button className="p-6 bg-blue-500 rounded-md" onClick={decrement}>Decrement</button>
        </div>
        <div>
            <button className="p-6 bg-blue-500 rounded-xl" onClick={reset}>Reset</button>
        </div>

    </div>
  )
}

export default Counter
