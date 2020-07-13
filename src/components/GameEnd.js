import React from "react";
import Calcifer from "../images/Calcifer.gif"

export default function GameEnd(props) {
  return (
    // props.show
    // ?<div>
    //   <h1>{props.result.guess ? "Correct" : "Incorrect"} guess - Game Over!</h1>
    //   <h3>Winner: {props.result.winner}</h3>
    // </div>
    // : <></>

    <div className="winner-screen">
      <svg>
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="80%">
            Congrats!
          </text>
        </symbol>

        <g class="g-ants">
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
          <use xlinkHref="#s-text" class="text-copy"></use>
        </g>
      </svg>
      <div className="winner-div">
      <img src={ Calcifer } />
      <h2>Winner: Final Fantasy</h2>
      <img src={ Calcifer } />
      </div>
      
    </div>
  );
}
