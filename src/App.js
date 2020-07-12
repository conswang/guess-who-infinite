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
import Game from './components/Game';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/game">
          <Game/>
        </Route>
        <Route path="/test">
          <CharacterContainer/>
        </Route>
        <Route path="/select">
          <SelectContainer/>
        </Route>
        <Route path="/">
          <Landing/>
        </Route>
      </Switch>
    </Router>
  );
}

export const socket = io(config.SERVER_URI);

export default App;

