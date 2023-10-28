import { useState } from "react";

const Form = () => {

  // State Manage
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const[message, setMessage] =useState("")

   // validation
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  // setting values
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageChangeHandler = (e) =>{
    setMessage(e.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };


  // Submit Form 
  const formSubmissionHandler = async(event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }


    //Request to backend
    try{
      const response = await fetch("http://localhost:4000/send",{
        method:"POST",
        body: JSON.stringify({ enteredName, enteredEmail, message }),
        headers: { "Content-Type": "application/json" },
      })
      if(response.ok){
        alert("Email Sent Successfully")
      }
    }catch(error){
     alert("something went wrong try again later"); 
    }
    
   

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
    setMessage("");
  };

  // Error display
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid pt-4 "
    : "form-control pt-4 ";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid pt-2 "
    : "form-control pt-2" ;

  return (
    <form className="text-white bg-blue-900 rounded-lg md:w-2/5 md:rounded-none md:h-80" onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses} >
        <label className ="flex justify-start text-xl font-header pl-4 mt-1" htmlFor="name">Your Name</label>
        <input
        className="rounded-md px-1 w-[90%] h-9 text-black text-sm mx-2"
          type="text"
          placeholder={enteredEmailIsInvalid ? "please enter your name" : "Your name"}
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {/* {nameInputIsInvalid && (
          <p className="error-text ">Name must not be empty.</p>
        )} */}
      </div>
      <div className={emailInputClasses}>
        <label className ="flex justify-start text-xl font-header pl-4 mt-1" htmlFor="email">Your E-Mail</label>
        <input
        className="rounded-md px-1  w-[90%] h-9 text-sm  text-black mx-2"
          type="email"
          id="email"
          placeholder={enteredEmailIsInvalid ? ("pleas enter valid email"):"email must contain @ sign"}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {/* {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )} */}
      </div>

      <div className="mt-3" >
        <label className ="flex justify-start text-xl font-header pl-4 mt-1" htmlFor="email">Your Message</label>
        <textarea  rows="4" cols="50"
        className=" px-1 resize-none  rounded-md w-[90%] h-20 text-sm items-start text-black mx-2"
          id="text"
          onChange={messageChangeHandler}
          value={message}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
