import React from 'react';

export default ({ code }) => {
    return(
        <div className="lobby-container">
            <p> Type join code: </p>
            <h1> { code }  </h1>
            <p> Waiting for player 2... </p>
        </div>
    )
}