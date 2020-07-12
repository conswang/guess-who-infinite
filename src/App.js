import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing';
import QuestionContainer from './components/QuestionContainer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';
import { config } from './config/config.js';
import CharacterSelect from './components/CharacterSelect';

function App() {

  const socket = io(config.SERVER_URI);

  return (
    <Router>
      <Switch>
        <Route path="/quest">
          <QuestionContainer />
        </Route>
        <Route path="/character">
          <CharacterSelect />
        </Route>
        <Route path="/">
          <Landing socket={ socket } />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

