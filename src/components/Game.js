import React from 'react';
import Answer from './Answer';
import QuestionContainer from './QuestionContainer';
import CharacterSelect from './CharacterSelect';
import CharacterContainer from './CharacterContainer';
import { socket } from '../App';

export default class Game extends React.Component {

  state = {
    // status is ask | answer | wait | guess | end
    status: 'wait',
    question: '',
    guessedIdx: '',
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
    if (this.state.guessedIdx !== '') {
      socket.emit('guess', this.state.guessedIdx);
      socket.on('gameEnded', (result) => {
        this.props.setModeCallback('gameEnd');
        this.props.setResultCallback(result);
      });
    }
  }

  render () {
    return (
      this.props.show
        ?<div className='game-container'>
          <Answer
            open={this.state.status === 'answer'}
            question={ this.state.question }
            answerCallback={ this.answerWasSent }/>
          <button onClick={ this.readyToGuess }>Ready to Guess</button>
          <button onClick={ this.submitGuess }>Submit Guess</button>
          <CharacterContainer
            inFinalSelectMode={ this.state.status === 'guess' }
            callback={ this.updateGuessedIdx } />
          <QuestionContainer questionCallback={ this.questionWasAsked }/>
        </div>
        :<></>
    );
  }
}