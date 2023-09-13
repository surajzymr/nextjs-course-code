import { useRef, useState } from "react";

function HomePage() {
  const [emailValue, setValue] = useState();
  const [descvalue, setDescValue] = useState();
  const emailValueRef = useRef();
  const descValueRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredemail = emailValueRef.current.value;
    const enteredDesc = descValueRef.current.value;
    setValue(enteredemail);
    setDescValue(enteredDesc);
    console.log("enteredDesc....", enteredemail);
    console.log("enteredDesc...", enteredDesc);

    const reqBody = { email: enteredemail, text: enteredDesc };

    fetch("api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());   
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email Address: </label>
        <input type="email" id="email" ref={emailValueRef} />
        <br />
        <label htmlFor="text">Description: </label>
        <input type="text" id="text" ref={descValueRef} />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <div>
        <p>Email : {emailValue}</p>
        <p>Description: {descvalue}</p>
      </div>
    </div>
  );
}

export default HomePage;
