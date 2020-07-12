import React, { useEffect } from 'react';

export default (props) => {

    useEffect(() => {
        props.socket.on('startedGame', () => {
            window.location = '/select';
        });
    });

    return(
        <div className="lobby-container">
            <p> Type join code: </p>
            <h1> { props.code }  </h1>
            <p> Waiting for player 2... </p>
        </div>
    )
}