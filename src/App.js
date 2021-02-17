import React from 'react';
import Card from './components/Card';
import './style.css';

function App() {
  return (
    <div className="App">

      <h1><span role="img" aria-label="antenna-bars">📶</span>&nbsp; WiFi Login Card</h1>

      <p className="tag">
        Print a simple card with your WiFi login details. Tape it to the fridge, keep it in your wallet, etc.
      </p>

      <p className="tag">
        Your WiFi information is never sent to the server.
        No tracking, analytics, or fingerprinting are used on this website.
        <a href="https://github.com/itsRealoj/wifi-card">View Source code</a>.
      </p>

      <Card />

    </div>
  );
}

export default App;
