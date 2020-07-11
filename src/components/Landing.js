import React, { useState } from 'react';

export default () => {
    const [select, useSelect] = useState(true);

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


                <label>name</label>
                <input></input>
                <label>category</label>
                <input></input>
                <label>no.of cards(slider)</label>
                <button className="submit"> CREATE </button>
            </div>
        </div>
    )
}