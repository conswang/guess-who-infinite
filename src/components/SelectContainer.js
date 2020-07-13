import React from 'react';
import CharacterContainer from './CharacterContainer';
import { socket } from '../App';

export default class SelectContainer extends React.Component {
  state = {
    // status can be select | wait
    status: 'select',
    selectedIdx: null,
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
    if (idx !== null) {
      socket.emit('selectCard', idx);
      socket.on('waitingForSelection', () => {
        this.setState({
          status: 'wait'
        })
      });
    }
  }

  render() {
    let chooseButton = this.state.selectedIdx !== null
      ? <button className='switch' onClick={ () => this.selectCard(this.state.selectedIdx)}>Submit</button>
      : undefined
    return (
      this.props.show ?
        this.state.status === 'select'
          ? <>
              <h3>Choose your Card</h3>
              <CharacterContainer
                callback={this.updateSelectedIdx}
                inFinalSelectMode={true}
                category={this.props.category} />
              { chooseButton }
            </>
          : <div className="waitingRoom">
              <div class="loader"></div>
              <h1>Waiting for other player...</h1>
            </div>
        :<></>
      
    );
  }
}