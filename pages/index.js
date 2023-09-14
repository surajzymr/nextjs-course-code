import { useRef, useState } from "react";
import Link from "next/link";

function HomePage() {
  const [emailValue, setValue] = useState();
  const [descvalue, setDescValue] = useState();
  const [feedbackItems, setFeedbackItems] = useState([]);
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
  // below making a GET call, and then retriving and then reiterating the data below.
  function loadFeedBackData() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }
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
      <div>
        <button onClick={loadFeedBackData}>Load Data</button>
        <Link href={"/feedback"}>
          <button>FeedBack</button>
        </Link>
        {feedbackItems.map((e) => {
          return (
            <div>
              <table key={e.id}>
                <tr>
                  <td>{e.email}</td>
                  <td>{e.text}</td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
