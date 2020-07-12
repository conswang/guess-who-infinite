import React from 'react';
import Answer from './Answer';
import QuestionContainer from './QuestionContainer';
import CharacterSelect from './CharacterSelect';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerMode: false
    }
  }

  componentDidMount() {
    this.props.socket.on('playerAsked', question => 
      this.setState({
        answerMode: true
      })
    )
  }

  render () {
    return (
      <div className='game-container'>
        <Answer socket={this.props.socket} show={this.state.answerMode}/>
        <CharacterSelect socket={this.props.socket}/>
        <QuestionContainer socket={this.props.socket}/>
      </div>
    );
  }
}