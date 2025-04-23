import React, { useState, useRef, useEffect } from "react";

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

  // PERFORM PASSWORD VGALIDATION FIRST : TOOK HELP OF AI
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formVal.password !== formVal.confirmPassword) {
      alert("PASSWORD IS CRYING IN THE CORNER!");
      return clearForm(); // Stop submission if validation fails
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
      <div className="background">
        <form className="form">
          <h1 className="text-3xl text-[#B3FF00] font-semibold tracking-[.125em] pb-5 text-center relative">
            Reg<span className="text-purple-500">i</span>ster
            <span className="text-purple-500">!</span>
          </h1>
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
            type="tel"
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
            type="password"
            placeholder="Password Here"
            name="password"
            value={formVal.password}
            onChange={handleChange}
            className="field"
          />
          <br />
          <label className="labell" onClick={handleGuideMeConfirmPassword}>
            Confirm Password :
          </label>
          <input
            ref={guideMeConfirmPassword}
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formVal.confirmPassword}
            onChange={handleChange}
            className="field"
          />
          <br />
          <div className="btnrow">
            <button
              className="btn"
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              {isLoading ? "Submitting" : "Submit"}
            </button>
            <button className="btn" onClick={clearForm}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormDetails;
