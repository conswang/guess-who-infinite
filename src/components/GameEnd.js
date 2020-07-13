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

  const getImage = (player) => {
    const imageSrc = props.images[player.selectedCard].img;
    return (
      <div className="ending-card-div">
        <img src={imageSrc} className='card-img'></img>
        <h3 className="ending-div-name">{player.name}</h3>
      </div>
    )
  }

  let image1;
  let image2;
  
  if (props.result.game) {
    image1 = getImage(props.result.game.player1);
    image2 = getImage(props.result.game.player2);
  }

  return props.show ? (
    <div className="end-screen">
      <h1>Game Over!</h1>
      <div className="ending-images-div">
        { image1 }
        { image2 }
      </div>
      <div className="end-div">
        <div className="username">{props.result.youWin ? "Correct Guess -" : "Incorrect Guess - "}</div>
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
