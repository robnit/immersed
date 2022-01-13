import React from 'react';
import logo from './logo.svg';
import { useSelector, update } from './State';
import './App.css';

function App() {
  const clickCount = useSelector(s => s.clickCount);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => update((s) => {
          s.clickCount++;
        })}>
          Clicked {clickCount} times
        </button>
      </header>
    </div>
  );
}

export default App;
