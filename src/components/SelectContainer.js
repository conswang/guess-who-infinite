import React from 'react';
import CharacterContainer from './CharacterContainer';
import { socket } from '../App';

export default class SelectContainer extends React.Component {
  state = {
    // status can be select | wait
    status: 'select'
  }

  componentDidMount() {
    socket.on('startedQuestions', () => {
      this.props.callback('game');
    });
  }

  cardWasSelected = (idx) => {
    socket.emit('selectCard', idx);
    socket.on('waitingForSelection', () => {
      this.setState({
        status: 'wait'
      })
    });
  }

  render() {
    return (
      this.props.show ?
        this.state.status === 'select'
          ? <CharacterContainer selectCardCallback={this.cardWasSelected}/>
          : <p>Waiting for selection</p>
        :<></>
    );
  }
}