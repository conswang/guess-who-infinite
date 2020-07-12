import React, { useState } from 'react';

export default (props) => {
    let [question, setQuestion] = useState('');

    const handleQuestion = event => {
        const letter = event.target.value;
        setQuestion(letter);
    }

    const ask = () => {
        alert(question)
    }

    const handleEnter = event => {
        if(event.key === 'Enter') {
            alert("ENTERING");
        }
    }

    return(
        <div className="question-container">
            <div className="question">
                <button onClick={ ask }> Ask! </button>
                <input type="text" value={ question } onChange={ handleQuestion } onKeyDown={ handleEnter }></input>
            </div>
            <h2 className="reply"> YES! </h2>
        </div>
    )
}