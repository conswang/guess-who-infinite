import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing';
import CharacterContainer from './components/CharacterContainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';
import { config } from './config/config.js';
import CharacterSelect from './components/CharacterSelect';
import SelectContainer from './components/SelectContainer';
import Answer from './components/Answer';
import Game from './components/Game';

function App() {
  // mode can be 'landing' | 'select' | 'game'
  const [mode, setMode] = useState('landing');

  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game show={true}/>
        </Route>
        <Route path="/test">
          <CharacterContainer show={true}/>
        </Route>
        <Route path="/select">
          <SelectContainer show={true}/>
        </Route>
        <Route path="/answer">
          <Answer open={true} question='Is your character blonde?'/>
        </Route>
        <Route path="/">
          <Landing
            show={mode === 'landing'}
            callback={setMode}/>
          <SelectContainer
            show={mode === 'select'}
            callback={setMode}/>
          <Game show={mode === 'game'}/>
        </Route>
      </Switch>
    </Router>
  );
}

export const socket = io(config.SERVER_URI);

export default App;

