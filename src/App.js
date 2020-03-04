import React from 'react';
import Box from './components/Box';
import './App.css';
import Header from './components/Header'
import BoxFunction from "./components/BoxFunction"

function App() {
  return (
    <div className="App">
      <Header title='Tasks to do:' />
        <br></br>
      <BoxFunction />
    </div>
  );
}

export default App;
