import React, { useState, useRef, useEffect } from "react";
import { CgSlack } from "react-icons/cg";

const FormDetails = () => {
  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  //CLEAR FORM DATA
  const clearForm = () => {
    setFormVal({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  //useRef HOOKS BLOCK
  const guideMeName = useRef();
  const guideMeEmail = useRef();
  const guideMePhone = useRef();
  const guideMePassword = useRef();
  const guideMeConfirmPassword = useRef();

  //OnClick GUIDER BLOCK
  const handleGuideMeName = () => {
    guideMeName.current.focus();
    console.log(guideMeName.current);
  };

  const handleGuideMeEmail = () => {
    guideMeEmail.current.focus();
    console.log(guideMeEmail.current);
  };

  const handleGuideMePhone = () => {
    guideMePhone.current.focus();
    console.log(guideMePhone.current);
  };

  const handleGuideMePassword = () => {
    guideMePassword.current.focus();
    console.log(guideMePassword.current);
  };

  const handleGuideMeConfirmPassword = () => {
    guideMeConfirmPassword.current.focus();
    console.log(guideMeConfirmPassword.current);
  };

  //STATE HANDLER FUNCTION
  const handleChange = (e) => {
    setFormVal({
      ...formVal,
      [e.target.name]: e.target.value,
    });
    console.log(formVal.name);
    console.log(formVal.email);
    console.log(formVal.phone);
    console.log(formVal.password);
  };

  //SUBMISSION HANDLER FUNCTION
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // Perform password validation first ; took help of AI
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formVal.password !== formVal.confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return; // Stop submission if validation fails
    }

    // Proceed with form submission
    console.log(formVal.name);
    console.log(formVal.email);
    console.log(formVal.phone);
    console.log(formVal.password);
    setIsLoading(true);
    setIsDisabled(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
    }, 1000);
    clearForm();
  };

  return (
    <>
      <h1 classname="w-full h-screen flex items-center justify-center flex-col bg-transparent text-white">
        HEY THERE, DEAR USER!
      </h1>
      <div className="background">
        <form className="flex flex-col gap-1">
          <label className="labell" onClick={handleGuideMeName}>
            Full Name :
          </label>
          <input
            ref={guideMeName}
            type="text"
            placeholder="Name Here"
            name="name"
            value={formVal.name}
            onChange={handleChange}
            className="field"
          />
          <br />
          <label className="labell" onClick={handleGuideMeEmail}>
            Email :
          </label>
          <input
            ref={guideMeEmail}
            type="text"
            placeholder="Email Here"
            name="email"
            value={formVal.email}
            onChange={handleChange}
            className="field"
          />
          <br />
          <label className="labell" onClick={handleGuideMePhone}>
            Phone :
          </label>
          <input
            ref={guideMePhone}
            type="text"
            placeholder="Phone Here"
            name="phone"
            value={formVal.phone}
            onChange={handleChange}
            className="field"
          />
          <br />
          <label className="labell" onClick={handleGuideMePassword}>
            Password :
          </label>
          <input
            ref={guideMePassword}
            type="text"
            placeholder="Password Here"
            name="password"
            value={formVal.password}
            onChange={handleChange}
            className="field"
          />
          <br />
          <label className="labell" onClick={handleGuideMeConfirmPassword}>
            Confirm Pasword :
          </label>
          <input
            ref={guideMeConfirmPassword}
            type="text"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formVal.confirmPassword}
            onChange={handleChange}
            className="field"
          />

          <button disabled={isDisabled} onClick={handleSubmit} className="btn">
            {isLoading ? "Submitting" : "Submit"}
          </button>
          <button className="btn" onClick={clearForm}>
            Clear
          </button>
        </form>
      </div>
    </>
  );
};

export default FormDetails;
