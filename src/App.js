import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing';
import CharacterContainer from './components/CharacterContainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';
import { config } from './config/config.js';
import CharacterSelect from './components/CharacterSelect';
import SelectContainer from './components/SelectContainer';
import Game from './components/Game'

function App() {

  const socket = io(config.SERVER_URI);

  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game socket={ socket } />
        </Route>
        <Route path="/test">
          <CharacterContainer socket={ socket } />
        </Route>
        <Route path="/select">
          <SelectContainer socket={ socket } />
        </Route>
        <Route path="/">
          <Landing socket={ socket } />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

