import React from 'react';
import CharacterContainer from './CharacterContainer';

export default class SelectContainer extends React.Component {
  state = {
    // status can be select | wait
    status: 'select'
  }

  componentDidMount() {
    this.props.socket.on('startedQuestions', () => {
      window.location = '/game'
    });
  }

  cardWasSelected = (idx) => {
    this.props.socket.emit('selectCard', idx);
    this.props.socket.on('waitingForSelection', () => {
      this.setState({
        status: 'wait'
      })
    });
  }

  render() {
    return (
      this.state.status === 'select'
        ? <CharacterContainer selectCardCallback={this.cardWasSelected}/>
        : <p>Waiting for selection</p>
    );
  }
}