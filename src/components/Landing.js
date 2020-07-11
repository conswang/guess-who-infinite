import React, { useState } from 'react';
import io from 'socket.io-client';
import { config } from '../config/config.js';

export default () => {
    const [select, useSelect] = useState(true);

    let createGame = () => {
        let socket = io(config.SERVER_URI);
        socket.emit('createGame', 'name1');
    }
    
    let joinGame = () => {
        let socket = io(config.SERVER_URI);
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
                    <button onClick={() => {useSelect(!select)}} className={ select ? 'create select' : 'create'}> create game </button>
                    <button onClick={() => {useSelect(!select)}} className={ select ? 'join' : 'join select'}> join game</button>
                </div>


                <label for="name">name</label>
                <input name="name" id="name" type="text"></input>
                <label for="category">category</label>
                <input name="category" id="category" type="text"></input>
                <label>no.of cards(slider)</label>
                <button type="submit" className="submit" onClick={createGame}> CREATE </button>
            </div>
        </div>
    )
}