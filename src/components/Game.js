import React from 'react';
import Answer from './Answer';
import QuestionContainer from './QuestionContainer';
import CharacterSelect from './CharacterSelect';
import CharacterContainer from './CharacterContainer';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerMode: false,
      question: '',
    }
  }

  componentDidMount() {
    this.props.socket.on('playerAsked', question => 
      this.setState({
        answerMode: true
      })
    )
  }

  // can currently grab the info from the child and pass it up but having trouble with setting the state
  setQuestion(event) {
    // this.setState({
    //   question: event
    // })
    alert(event)
    // this.setState({
    //   question: event
    // })
    // not working and not sure why
  }

  render () {
    return (
      <div className='game-container'>
        <Answer socket={this.props.socket} show={this.state.answerMode}/>
        <CharacterSelect socket={this.props.socket}/>
        <QuestionContainer question={ this.setQuestion } socket={this.props.socket}/>
      </div>
    );
  }
}