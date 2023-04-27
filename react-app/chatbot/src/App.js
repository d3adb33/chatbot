/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
import React, { useState } from "react";
import './App.css';


function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo: send inputText to backend and receive outputText
    setOutputText('');
    setInputText('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ChatGPT</h1>
      </header>
      <div className="Chat-container">
        <div className="Input-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message here..."
              autoFocus
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="Output-container">{outputText}</div>
      </div>
    </div>
  );
}


export default App;
