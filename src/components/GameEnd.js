import React from "react";

/*
  result: {
    youWin: boolean,
    guess: boolean,
    game: {
      ... refer to the guess method in game.js and the game class for full definition
    }
  }
*/

export default function GameEnd(props) {
  return props.show ? (
    <div className="end-screen">
      <h1>Game Over!</h1>
      <div className="end-div">
        <div className="username">{props.result.winner}</div>
        <div className="message-div">
          <span>
            {props.result.youWin
              ? "Congrats! You Win!"
              : "Better Luck Next Time..."}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
