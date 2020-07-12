import React, { useState } from 'react';
import { socket } from '../App';
import LobbyRoom from './LobbyRoom';

export default (props) => {
    const [select, useSelect] = useState(true);
    const [lobby, setLobby] = useState(false);
    let [name, setName] = useState('');
    let [category, setCategory] = useState('');
    let [join, setJoin] = useState('');
    let [code, setCode] = useState('');

    let createGame = () => {
        if(name === '' || category === '') {
            alert("PLEASE ENTER A NAME AND SELECT A CATEGORY")
            return
        }
        socket.emit('createGame', name);
        socket.on('createdGame', joinCode => {
            console.log(joinCode);
            setCode(joinCode);
        });
        setLobby(true);
        
    }
    
    let joinGame = () => {
        if(name === '' || join === '') {
            alert("PLEASE ENTER A NAME AND ENTER A CODE")
            return
        }
        socket.emit('joinGame', name, join);
        socket.on('startedGame', () => {
            props.callback('select')
        });
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
            {console.log(lobby)}
                <label for="category">category</label>
                <input name="category" id="category" type="text" value={ category } onChange={ handleCategoryChange } required></input>
                <label>no.of cards</label>
                <span className="right-side-button">
                    <button type="submit" className="submit" onClick={createGame}> CREATE </button>
                </span>
            </div>
    }

    const joinTab = () => {
        return <div className='normalize-bot'>
            {console.log(lobby)}
                <label for="join">join code</label>
                <input name="join" id="join" type="text" value={ join } onChange={ handleJoinChange } required></input>
                <br></br>
                <span className="right-side-button">
                    <button type="submit" className="submit" onClick={joinGame}> JOIN </button>
                </span>
            </div>
    }

    const inLobby = () => {
        return lobby ? <LobbyRoom code={ code } callback={ props.callback } /> :
              <div className="landing-form-container">
                <div className="create-join-container">
                    <button onClick={() => {useSelect(!select)}} className={ select ? 'create select' : 'create'}> create game </button>
                    <button onClick={() => {useSelect(!select)}} className={ select ? 'join' : 'join select'}> join game</button>
                </div>

                <label for="name">name</label>
                <input name="name" id="name" type="text" value={ name } onChange={ handleNameChange } required></input>
                { select ? createTab() : joinTab() }
            </div>
    }

    return(
        props.show
        ?<div className="landing-container">
            { console.log(`${code} hereeeeee`) }
            <div className="title">
                <h3> Guess Who </h3>
                <h1> Infinite </h1>
            </div>

            { inLobby() }
        </div>
        : <></>
    )
}