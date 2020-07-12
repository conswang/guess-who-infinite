import React, { useEffect } from 'react';
import { socket } from '../App';

export default (props) => {

    useEffect(() => {
        socket.on('startedGame', () => {
            props.callback('select')
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