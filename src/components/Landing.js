import React from 'react';

export default () => {
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
                <button>CREATE</button>
            </div>
        </div>
    )
}