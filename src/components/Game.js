import React from 'react';
import Answer from './Answer';
import QuestionContainer from './QuestionContainer';
import CharacterSelect from './CharacterSelect';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: this.props.socket,
    }
  }

  render () {
    return (
      <div className='game-container'>
        <Answer socket={this.state.socket}/>
        <CharacterSelect/>
        <QuestionContainer socket={this.state.socket}/>
      </div>
    );
  }
}