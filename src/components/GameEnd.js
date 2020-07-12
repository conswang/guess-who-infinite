import React from 'react';

export default function GameEnd (props) {
  return(
    props.show
    ?<div>
      <h1>{props.result.guess ? "Correct" : "Incorrect"} guess - Game Over!</h1>
      <h3>Winner: {props.result.winner}</h3>
    </div>
    : <></>
  )
}