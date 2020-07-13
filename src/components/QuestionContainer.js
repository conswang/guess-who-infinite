import React, { useState, useEffect } from "react";
import { socket } from "../App";

export default (props) => {
  let [question, setQuestion] = useState("");
  let [answer, setAnswer] = useState("?");
  let [myTurn, setMyTurn] = useState(true);

  const handleQuestion = (event) => {
    const letter = event.target.value;
    setQuestion(letter);
    if (question.length >= 0 || question === " ") {
      console.log(question.length);
      setMyTurn(false);
    } else {
      console.log(question.length);
      setMyTurn(true);
    }
  };

  const ask = () => {
    socket.emit("ask", question);
    props.questionCallback();
    setQuestion("");
    setMyTurn(true);
  };

  useEffect(() => {
    socket.on("playerAnswered", (isTrue) => {
      let answer = isTrue ? "YES!" : "NO!";
      setAnswer(answer);
    });
  });

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      ask();
    }
  };

  return (
    <div className="question-container">
      <div className="question">
        <h1 onClick={ask}> Ask! </h1>
        <div className="question-input">
          <span>
          <input
            type="text"
            value={question}
            onChange={handleQuestion}
            onKeyDown={handleEnter}
          ></input>
          <button onClick={() => ask(question)} disabled={myTurn}>
            {" "}
            Send{" "}
          </button>
          </span>
        </div>
      </div>
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <h2 className="reply"> {answer} </h2>
      </div>
    </div>
  );
};
