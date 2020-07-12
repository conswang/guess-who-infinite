import React from 'react';
import Answer from './Answer';
import QuestionContainer from './QuestionContainer';
import CharacterSelect from './CharacterSelect';
import CharacterContainer from './CharacterContainer';

export default class Game extends React.Component {
  
  state = {
    // status is ask | answer | wait
    status: '',
    question: '',
  }

  componentDidMount() {
    const status = 'wait';
    this.props.socket.emit('getTurn');
    this.props.socket.on('turn', turn =>
      this.setState({
        status: turn
      })
    );
    this.props.socket.on('playerAsked', question => 
      this.setState({
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

  render () {
    return (
      <div className='game-container'>
        <Answer
          socket={this.props.socket}
          show={this.state.status === 'answer'}
          question={ this.state.question }
          answerCallback={ this.answerWasSent }/>
        <CharacterContainer socket={this.props.socket}/>
        <QuestionContainer 
          socket={this.props.socket}
          questionCallback={ this.questionWasAsked }/>
      </div>
    );
  }
}