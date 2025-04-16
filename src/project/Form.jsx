import React from "react";
import { useState } from "react";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        <br></br>
        <button disabled={isDisabled} onClick={handleSubmit}>
          {isLoading ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
