import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Square from './Square';
import Board from './Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="game">

        <div className="game-board">
          <Board/>
        </div>

        <div className="game-info">
          
        </div>

      </div>

    </div>
  );
}

export default App;
