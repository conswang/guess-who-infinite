import React from 'react';
import Answer from './Answer';
import QuestionContainer from './QuestionContainer';
import CharacterSelect from './CharacterSelect';
import CharacterContainer from './CharacterContainer';
import { socket } from '../App';

export default class Game extends React.Component {

  state = {
    // status is ask | answer | wait | guess
    status: 'wait',
    question: '',
    guessedIdx: null,
  }

  componentDidMount() {
    socket.on('turn', turn =>
      this.setState({
        status: turn
      })
    );
    socket.on('playerAsked', question => 
      this.setState({
        status: 'answer',
        question: question
      })
    )
    socket.on('gameEnded', (result) => {
      this.props.setModeCallback('gameEnd');
      this.props.setResultCallback(result);
    });
  }

  answerWasSent = () => {
    this.setState({
      status: 'ask'
    })
  }

  questionWasAsked = () => {
    this.setState({
      status: 'wait'
    })
  }

  readyToGuess = () => {
    this.setState({
      status: 'guess'
    })
  }
  
  updateGuessedIdx = (idx) => {
    this.setState({
      guessedIdx: idx
    })
  }

  submitGuess = () => {
    console.log(this.state.guessedIdx)
    if (this.state.guessedIdx !== null) {
      socket.emit('guess', this.state.guessedIdx);
    }
  }

  render () {
    let submitGuessButton = this.state.guessedIdx !== null
      ? <button onClick={ this.submitGuess }>Submit Guess</button>
      : undefined
    return (
      this.props.show
        ?<div className='game-container'>
          <Answer
            open={this.state.status === 'answer'}
            question={ this.state.question }
            answerCallback={ this.answerWasSent }/>

        <div className="guess-button-container">
          <button onClick={ this.readyToGuess }>Ready to Guess</button>
          { submitGuessButton }
        </div>

          <CharacterContainer
            inFinalSelectMode={ this.state.status === 'guess' }
            callback={ this.updateGuessedIdx } />
          <QuestionContainer questionCallback={ this.questionWasAsked }/>
        </div>
        :<></>
    );
  }
}