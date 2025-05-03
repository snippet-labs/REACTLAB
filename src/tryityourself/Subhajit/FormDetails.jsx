import React, { useRef, useState } from 'react'

const FormDetails = () => {

// useState for data management from the form
const [formDetails,setFromDetails] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
})

//METHODE TO CLEAR THE FORM DETAILS
const clearFrom = () => {
    setFromDetails({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    })
}

// HANDELER FUNCTION
const formHandeler = (e) => {
    setFromDetails({
        ...formDetails,
        [e.target.name]: e.target.value,
    })
    // console.log(formDetails[e.target.name]);
}


// USEREF FOR REFERENCING ALL CHANGES 
const userNameRef = useRef();
const userEmailRef = useRef();
const userPhoneRef = useRef();
const userPasswordRef = useRef();
const userConfirmPasswordRef = useRef();

// GUIDE METHODES TO GUIDE TO EACH INPUT FIELD USING useRef

const guideName = function(){
    userNameRef.current.focus();
    console.log(userNameRef.current);
    
}
const guideEmail = function(){
    userEmailRef.current.focus();
}
const guidePhone = function(){
    userPhoneRef.current.focus();
}
const guidePassword = function(){
    userPasswordRef.current.focus();
}
const guideConfirmPassword = function(){
    userConfirmPasswordRef.current.focus();
}

// USE STATES FOR DELAY IN SUBMIT

const [isLoading,setIsLoading] = useState(false);
const [isDisabled,setIsDisabled] = useState(false);

// HANDEL SUBMIT METHODE TO HANDEL THE SUBMIT FUNCTIONALITY
const handelSubmit = function(e){
    e.preventDefault();
    if(formDetails.password !== formDetails.confirmPassword){
        alert("Confirm Password does not match with Password field");
        guideConfirmPassword();
    }
    else{
        setIsDisabled(true);
        setIsLoading(true);
        console.log(formDetails.name);
        console.log(formDetails.email);
        console.log(formDetails.phone);
        console.log(formDetails.password);
        console.log(formDetails.confirmPassword);
        setTimeout(()=>{
            setIsDisabled(true);
            setIsLoading(false);
            clearFrom();
        },1500)
    }
}

  return (
    <>
    <div className="bg">
    <form className="frm">
        <label htmlFor="" className='lbl' onClick={guideName}>User Name</label>
        <input type="text" name="name" ref={userNameRef} className='fld' value={formDetails.name} onChange={formHandeler}/>

        <label htmlFor="" className='lbl' onClick={guideEmail}>Email</label>
        <input type="email"  name="email" ref={userEmailRef} className='fld' value={formDetails.email} onChange={formHandeler}/>

        <label htmlFor="" className='lbl' onClick={guidePhone}>Phone</label>
        <input type="number"  name="phone" ref={userPhoneRef} className='fld' value={formDetails.phone} onChange={formHandeler}/>

        <label htmlFor="" className='lbl' onClick={guidePassword}>Password</label>
        <input type="password"  name="password" ref={userPasswordRef} className='fld' value={formDetails.password} onChange={formHandeler}/>

        <label htmlFor="" className='lbl' onClick={guideConfirmPassword}>Confirm Password</label>
        <input type="password"  name="confirmPassword" ref={userConfirmPasswordRef} className='fld' value={formDetails.confirmPassword} onChange={formHandeler}/>

        <button className='bt' disabled={isDisabled} onClick={handelSubmit}>{isLoading?"Loading...":"Submit"}</button>
    </form>
    </div>
    </>
  )
}

export default FormDetails
