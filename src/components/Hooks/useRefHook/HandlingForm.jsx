import React, { useEffect } from "react";
import { useState, useRef } from "react";

const HandlingForm = () => {
  // STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  //   const [counter, setCounter] = useState(0);
  const counterCount = useRef(0);

  const guideMeName = useRef();
  const guideMeEmail = useRef();

  //   STATE HANDLER FUNCTION
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name);
    console.log(formData.email);
    setIsLoading(true);
    setIsDisabled(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
    }, 2000);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      counterCount.current = counterCount.current + 1;
      //   setCounter((previous) => previous + 1);
    }, 1000);
  });

  const handleGuideMeName = () => {
    guideMeName.current.focus();
    console.log(guideMeName.current);
  };

  const handleGuideMeEmail = () => {
    guideMeEmail.current.focus();
    console.log(guideMeEmail.current);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-slate-950">
      <form className="flex flex-col gap-2">
        <label
          className="text-white hover:cursor-pointer"
          onClick={handleGuideMeName}
        >
          FirstName :
        </label>
        <input
          ref={guideMeName}
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="field"
        ></input>
        <br></br>
        <label
          className="text-white hover:cursor-pointer"
          onClick={handleGuideMeEmail}
        >
          Email :
        </label>
        <input
          ref={guideMeEmail}
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="field"
        ></input>
        <br></br>
        <button
          disabled={isDisabled}
          onClick={handleSubmit}
          className="border-1 border-white rounded-md bg-white text-black hover:cursor-pointer p-1"
        >
          {isLoading ? "Submitting" : "Submit"}
        </button>
      </form>
      <div className="text-2xl text-white w-full mt-5 text-center">
        {counterCount.current}
        {/* {counter}  */}
      </div>
    </div>
  );
};

export default HandlingForm;
