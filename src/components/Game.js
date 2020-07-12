import React from 'react';
import Answer from './Answer';
import QuestionContainer from './QuestionContainer';
import CharacterSelect from './CharacterSelect';
import CharacterContainer from './CharacterContainer';
import { socket } from '../App';

export default class Game extends React.Component {
  
  state = {
    // status is ask | answer | wait
    status: 'wait',
    question: '',
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
  
  updateGuessedIdx = () => {

  }

  render () {
    return (
      this.props.show
        ?<div className='game-container'>
          <Answer
            open={this.state.status === 'answer'}
            question={ this.state.question }
            answerCallback={ this.answerWasSent }/>
          <CharacterContainer />
          <QuestionContainer questionCallback={ this.questionWasAsked }/>
        </div>
        :<></>
    );
  }
}