import React, { useState } from 'react';
import io from 'socket.io-client';
import { config } from '../config/config.js';

export default () => {
    const [select, useSelect] = useState(true);
    let [name, setName] = useState('');
    let [category, setCategory] = useState('');
    let [join, setJoin] = useState('');
    let [tab, setTab] = useState('create');

    let createGame = () => {
        let socket = io(config.SERVER_URI);
        console.log(process.env.REACT_APP_STAGE);
        socket.emit('createGame', 'name1');
    }
    
    let joinGame = () => {
        let socket = io(config.SERVER_URI);
        socket.emit('joinGame', 'name2', 'ROOM0');
    }

    const handleNameChange = event => {
        const letter = event.target.value;
        setName(letter);
    }

    const handleCategoryChange = event => {
        const letter = event.target.value;
        setCategory(letter);        
    }

    const handleJoinChange = event => {
        const letter = event.target.value;
        setJoin(letter);        
    }

    const createTab = () => {
        return <div className='normalize-bot'>
                <label for="category">category</label>
                <input name="category" id="category" type="text" value={ category } onChange={ handleCategoryChange }></input>
                <label>no.of cards</label>
                <span className="right-side-button">
                    <button type="submit" className="submit" onClick={createGame}> CREATE </button>
                </span>
            </div>
    }

    const joinTab = () => {
        return <div className='normalize-bot'>
                <label for="join">join code</label>
                <input name="join" id="join" type="text" value={ join } onChange={ handleJoinChange }></input>
                <br></br>
                <span className="right-side-button">
                    <button type="submit" className="submit" onClick={joinGame}> JOIN </button>
                </span>
            </div>
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
                <input name="name" id="name" type="text" value={ name } onChange={ handleNameChange }></input>
                { select ? createTab() : joinTab() }
            </div>
        </div>
    )
}