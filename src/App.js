import React from 'react';
import './App.css';
import Landing from './components/Landing';
import CharacterSelect from './components/CharacterSelect';
// import 'bootstrap/dist/css/bootstrap.min.css';
import io from 'socket.io-client';
import { config } from './config/config.js';

function App() {

  const socket = io(config.SERVER_URI);

  return (
    <div>
      <Landing socket={socket}/>
    </div>
  );
}

export default App;
