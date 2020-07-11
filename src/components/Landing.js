import React from 'react';
import io from 'socket.io-client';

export default () => {

    let createGame = () => {
        let socket = io(`http://localhost:5000`);
        socket.emit('createGame', 'name1');
    }
    
    let joinGame = () => {
        let socket = io(`http://localhost:5000`);
        socket.emit('joinGame', 'name2', 'ROOM0');
    }

    return(
        <div className="landing-container">
            <div className="title">
                <h3> Guess Who </h3>
                <h1> Infinite </h1>
            </div>

            <div className="landing-form-container">
                <div className="create-join-container">
                    <button className="create"> create game </button>
                    <button className="join"> join game</button>
                </div>


                <label>name</label>
                <input></input>
                <label>category</label>
                <input></input>
                <label>no.of cards(slider)</label>
                <button onClick={createGame}>CREATE</button>
            </div>
        </div>
    )
}