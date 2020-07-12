import React from 'react';
import CharacterContainer from './CharacterContainer';
import { socket } from '../App';

export default class SelectContainer extends React.Component {
  state = {
    // status can be select | wait
    status: 'select',
    selectedIdx: '',
  }

  componentDidMount() {
    console.log('I mounted')
    socket.on('startedQuestions', () => {
      this.props.callback('game');
      socket.emit('getTurn');
    });
  }

  updateSelectedIdx = (idx) => {
    this.setState({
      selectedIdx: idx
    })
  }

  selectCard = (idx) => {
    if (idx !== '') {
      socket.emit('selectCard', idx);
      socket.on('waitingForSelection', () => {
        this.setState({
          status: 'wait'
        })
      });
    }
  }

  render() {
    return (
      this.props.show ?
        this.state.status === 'select'
          ? <>
              <button className='switch' onClick={ () => this.selectCard(this.state.selectedIdx)}>Select this Card</button>
              <CharacterContainer callback={this.updateSelectedIdx} inFinalSelectMode={true}/>
            </>
          : <div className="waitingRoom">
              <div class="loader"></div>
              <h1>Waiting for other player...</h1>
            </div>
        :<></>
      
    );
  }
}