import React, { useState, useEffect } from 'react';
import { socket } from '../App';

export default (props) => {
    let [question, setQuestion] = useState('');
    let [answer, setAnswer] = useState('?');

    const handleQuestion = event => {
        const letter = event.target.value;
        setQuestion(letter);
    }

    const ask = () => {
        socket.emit('ask', question);
        props.questionCallback();
    }

    useEffect(() => {
        socket.on('playerAnswered', (isTrue) => {
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
                <h1 onClick={ ask }> Ask! </h1>
                <div className="question-input">
                    <input type="text" value={ question } onChange={ handleQuestion } onKeyDown={ handleEnter }></input>
                    <button onClick={ () => ask(question) }> Send </button>
                </div>
                
            </div>
            <h2 className="reply"> { answer } </h2>
        </div>
    )
}