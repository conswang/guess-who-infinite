import React, { useState, useEffect } from 'react';

export default (props) => {
    let [question, setQuestion] = useState('');
    let [answer, setAnswer] = useState('?');

    const handleQuestion = event => {
        const letter = event.target.value;
        setQuestion(letter);
    }

    const ask = () => {
        props.socket.emit('ask', question);
    }

    useEffect(() => {
        props.socket.on('playerAnswered', (isTrue) => {
            let answer = isTrue ? 'YES!' : 'NO!';
            setAnswer(answer);
        });
    });

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